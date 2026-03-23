using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Uow;

namespace DynamicDistributedEvents;

[EventName("DynamicDistEvents.ProviderScenario")]
public class ProviderScenarioEvent
{
    public int Value { get; set; }
}

public class DynamicEventScenarioRunner : ITransientDependency
{
    private readonly IDistributedEventBus _distributedEventBus;
    private readonly IUnitOfWorkManager _unitOfWorkManager;

    public DynamicEventScenarioRunner(
        IDistributedEventBus distributedEventBus,
        IUnitOfWorkManager unitOfWorkManager)
    {
        _distributedEventBus = distributedEventBus;
        _unitOfWorkManager = unitOfWorkManager;
    }

    public async Task RunAsync()
    {
        Console.WriteLine("Running dynamic event scenarios (direct publish)...");
        Console.WriteLine();

        await Task.Delay(3000);

        await TestTypedFromTypedPublishAsync(useOutbox: false);
        await TestTypedFromDynamicPublishAsync(useOutbox: false);
        await TestDynamicOnlyPublishAsync(useOutbox: false);
        await TestUnsubscribeAsync();
        await TestMixedHandlersAsync();

        Console.WriteLine();
        Console.WriteLine("All direct publish scenarios passed!");
    }

    public async Task RunWithOutboxAsync()
    {
        Console.WriteLine("Running dynamic event scenarios (outbox)...");
        Console.WriteLine();

        await Task.Delay(3000);

        await TestTypedFromTypedPublishAsync(useOutbox: true);
        await TestTypedFromDynamicPublishAsync(useOutbox: true);
        await TestDynamicOnlyPublishAsync(useOutbox: true);

        Console.WriteLine();
        Console.WriteLine("All outbox scenarios passed!");
    }

    private async Task TestTypedFromTypedPublishAsync(bool useOutbox)
    {
        var tcs = new TaskCompletionSource<int>(TaskCreationOptions.RunContinuationsAsynchronously);

        using var subscription = _distributedEventBus.Subscribe<ProviderScenarioEvent>(eventData =>
        {
            tcs.TrySetResult(eventData.Value);
            return Task.CompletedTask;
        });

        if (useOutbox)
        {
            using var uow = _unitOfWorkManager.Begin();
            await _distributedEventBus.PublishAsync(
                new ProviderScenarioEvent { Value = 42 },
                onUnitOfWorkComplete: true,
                useOutbox: true);
            await uow.CompleteAsync();
        }
        else
        {
            await _distributedEventBus.PublishAsync(
                new ProviderScenarioEvent { Value = 42 },
                onUnitOfWorkComplete: false,
                useOutbox: false);
        }

        var result = await tcs.Task.WaitAsync(TimeSpan.FromSeconds(30));
        if (result != 42)
        {
            throw new Exception($"TypedFromTyped: Expected 42, got {result}");
        }

        Console.WriteLine("  [PASS] TypedFromTyped: Typed publish -> typed handler" + (useOutbox ? " (outbox)" : ""));
    }

    private async Task TestTypedFromDynamicPublishAsync(bool useOutbox)
    {
        var tcs = new TaskCompletionSource<int>(TaskCreationOptions.RunContinuationsAsynchronously);

        using var subscription = _distributedEventBus.Subscribe<ProviderScenarioEvent>(eventData =>
        {
            tcs.TrySetResult(eventData.Value);
            return Task.CompletedTask;
        });

        var eventName = EventNameAttribute.GetNameOrDefault<ProviderScenarioEvent>();

        if (useOutbox)
        {
            using var uow = _unitOfWorkManager.Begin();
            await _distributedEventBus.PublishAsync(
                eventName,
                new { Value = 99 },
                onUnitOfWorkComplete: true,
                useOutbox: true);
            await uow.CompleteAsync();
        }
        else
        {
            await _distributedEventBus.PublishAsync(
                eventName,
                new { Value = 99 },
                onUnitOfWorkComplete: false,
                useOutbox: false);
        }

        var result = await tcs.Task.WaitAsync(TimeSpan.FromSeconds(30));
        if (result != 99)
        {
            throw new Exception($"TypedFromDynamic: Expected 99, got {result}");
        }

        Console.WriteLine("  [PASS] TypedFromDynamic: String-based publish -> typed handler" + (useOutbox ? " (outbox)" : ""));
    }

    private async Task TestDynamicOnlyPublishAsync(bool useOutbox)
    {
        var tcs = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);
        var dynamicEventName = "DynamicDistEvents.DynamicOnly." + Guid.NewGuid().ToString("N");

        var handler = new DynamicEventHandler(eventData =>
        {
            var json = System.Text.Json.JsonSerializer.Serialize(eventData.Data);
            if (json.Contains("hello-dynamic"))
            {
                tcs.TrySetResult(true);
            }
            return Task.CompletedTask;
        });

        using var subscription = _distributedEventBus.Subscribe(dynamicEventName, handler);

        if (useOutbox)
        {
            using var uow = _unitOfWorkManager.Begin();
            await _distributedEventBus.PublishAsync(
                dynamicEventName,
                new { Message = "hello-dynamic" },
                onUnitOfWorkComplete: true,
                useOutbox: true);
            await uow.CompleteAsync();
        }
        else
        {
            await _distributedEventBus.PublishAsync(
                dynamicEventName,
                new { Message = "hello-dynamic" },
                onUnitOfWorkComplete: false,
                useOutbox: false);
        }

        await tcs.Task.WaitAsync(TimeSpan.FromSeconds(30));

        Console.WriteLine("  [PASS] DynamicOnly: String-based publish -> dynamic handler" + (useOutbox ? " (outbox)" : ""));
    }

    private async Task TestUnsubscribeAsync()
    {
        var beforeCount = 0;
        var afterCount = 0;
        var dynamicEventName = "DynamicDistEvents.Unsub." + Guid.NewGuid().ToString("N");

        var tcs = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);

        var handler = new DynamicEventHandler(_ =>
        {
            beforeCount++;
            tcs.TrySetResult(true);
            return Task.CompletedTask;
        });

        var subscription = _distributedEventBus.Subscribe(dynamicEventName, handler);

        await _distributedEventBus.PublishAsync(
            dynamicEventName,
            new { Value = 1 },
            onUnitOfWorkComplete: false,
            useOutbox: false);

        await tcs.Task.WaitAsync(TimeSpan.FromSeconds(30));

        if (beforeCount != 1)
        {
            throw new Exception($"Unsubscribe: Expected 1 before unsubscribe, got {beforeCount}");
        }

        // Now unsubscribe
        subscription.Dispose();

        // Subscribe a second handler to verify events still flow, but original handler is gone
        var tcs2 = new TaskCompletionSource<bool>(TaskCreationOptions.RunContinuationsAsynchronously);
        var handler2 = new DynamicEventHandler(_ =>
        {
            afterCount++;
            tcs2.TrySetResult(true);
            return Task.CompletedTask;
        });

        using var subscription2 = _distributedEventBus.Subscribe(dynamicEventName, handler2);

        await _distributedEventBus.PublishAsync(
            dynamicEventName,
            new { Value = 2 },
            onUnitOfWorkComplete: false,
            useOutbox: false);

        await tcs2.Task.WaitAsync(TimeSpan.FromSeconds(30));

        if (beforeCount != 1)
        {
            throw new Exception($"Unsubscribe: Original handler called {beforeCount} times, expected 1");
        }

        if (afterCount != 1)
        {
            throw new Exception($"Unsubscribe: Second handler called {afterCount} times, expected 1");
        }

        Console.WriteLine("  [PASS] Unsubscribe: Dynamic handler disposed, no longer receives events");
    }

    private async Task TestMixedHandlersAsync()
    {
        var typedCount = 0;
        var dynamicCount = 0;

        using var typedSubscription = _distributedEventBus.Subscribe<ProviderScenarioEvent>(eventData =>
        {
            typedCount++;
            return Task.CompletedTask;
        });

        var eventName = EventNameAttribute.GetNameOrDefault<ProviderScenarioEvent>();

        var dynamicHandler = new DynamicEventHandler(_ =>
        {
            dynamicCount++;
            return Task.CompletedTask;
        });

        using var dynamicSubscription = _distributedEventBus.Subscribe(eventName, dynamicHandler);

        await _distributedEventBus.PublishAsync(
            new ProviderScenarioEvent { Value = 77 },
            onUnitOfWorkComplete: false,
            useOutbox: false);

        await Task.Delay(1000);

        if (typedCount != 1)
        {
            throw new Exception($"MixedHandlers: Expected typedCount=1, got {typedCount}");
        }

        if (dynamicCount != 1)
        {
            throw new Exception($"MixedHandlers: Expected dynamicCount=1, got {dynamicCount}");
        }

        Console.WriteLine("  [PASS] MixedHandlers: Both typed and dynamic handlers triggered for same event");
    }

    private class DynamicEventHandler : IDistributedEventHandler<DynamicEventData>
    {
        private readonly Func<DynamicEventData, Task> _action;

        public DynamicEventHandler(Func<DynamicEventData, Task> action)
        {
            _action = action;
        }

        public Task HandleEventAsync(DynamicEventData eventData)
        {
            return _action(eventData);
        }
    }
}
