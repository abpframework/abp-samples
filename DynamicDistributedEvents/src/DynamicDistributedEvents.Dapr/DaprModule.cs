using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EventBus.Dapr;
using Volo.Abp.Modularity;

namespace DynamicDistributedEvents;

/// <summary>
/// Dapr does NOT support dynamic event subscriptions.
/// Dapr requires topic subscriptions to be declared at application startup
/// and cannot add subscriptions at runtime.
///
/// Calling Subscribe(string, ...) or PublishAsync(string, ...) for pure dynamic events
/// will throw an AbpException.
///
/// This project is provided as a reference for developers. The test scenarios
/// are commented out because they will throw exceptions.
/// </summary>
[DependsOn(
    typeof(AbpEventBusDaprModule),
    typeof(SharedModule)
)]
public class DaprModule : AbpModule
{
    public override async Task OnApplicationInitializationAsync(ApplicationInitializationContext context)
    {
        // Dapr does NOT support dynamic event subscriptions.
        // The following code would throw AbpException:
        //
        // var runner = context.ServiceProvider.GetRequiredService<DynamicEventScenarioRunner>();
        // await runner.RunAsync();       // Subscribe(string, ...) throws
        // await runner.RunWithOutboxAsync();

        System.Console.WriteLine("Dapr provider does not support dynamic event subscriptions.");
        System.Console.WriteLine("Subscribe(string, ...) and PublishAsync(string, ...) will throw AbpException.");
        System.Console.WriteLine("Use typed event handlers (IDistributedEventHandler<T>) with Dapr.");

        await Task.CompletedTask;
    }
}
