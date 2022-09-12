# Using MassTransit via eShopOnAbp

[MassTransit](https://masstransit-project.com/) is a lightweight service bus for building distributed .NET applications. MassTransit makes it easy to create applications and services. It works with different integrations.
- In Memory
- RabbitMQ
- Azure Service Bus
- Amazon SQS
- gRPC
- ActiveMQ

As you know, `RabbitMQ` is one of the most popular open-source message brokers which is used by many developers. So we will continue with it. Also, you can implement the others easily as well.

MassTransit also supports exceptions, retries, sagas, scheduling and more features. We're planning to write some new articles about them.

In this article, we will show you how to use `MassTransit` in the [eShopOnAbp](https://github.com/abpframework/eShopOnAbp) project instead of `Volo.Abp.EventBus.Distributed`. 

In eShopOnAbp, once the order service cancels the order, it publishes an event. The configured services can consume it. In this case, the just payment service will do that. The system already works properly, but we will make changes without touching the business logic code and use MassTransit abilities.

Firstly, let's focus on the publishing event side (order service) and then we will focus on the consumer side (payment service).

Let's do its configuration in `OrderingServiceHttpApiHostModule` under the `EShopOnAbp.OrderingService.HttpApi.Host`
```csharp
public class OrderingServiceHttpApiHostModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        //the other configurations
        context.Services.AddMassTransit(x =>
        {
            x.AddBus(provider => Bus.Factory.CreateUsingRabbitMq(config =>
            {
                config.Host("host", h =>
                {
                    h.Username("username");
                    h.Password("pwd");
                });
            }));
        });
    }
}
```

To complete this configuration you need to install the related packages on NuGet or via the below code
> Install-Package MassTransit.RabbitMQ -Version 8.0.6

Let's do its implemantation on `OrderManager` under `EShopOnAbp.OrderingService.Domain`
As we mentioned above, the system already works properly so firstly we will remove/comment on the old published code and write the new codes.

```csharp
public class OrderManager : DomainService
{
    //...
    private readonly IBus _bus;

    public OrderManager(
        //..
        IBus bus)
    {
        //..
        _bus = bus;
    }

    public async Task<Order> CancelOrderAsync(Guid orderId)
    {
        var order = await _orderRepository.GetAsync(orderId);
        if (order == null)
        {
            throw new BusinessException(OrderingServiceErrorCodes.OrderWithIdNotFound)
                .WithData("OrderId", orderId);
        }

        order.SetOrderCancelled();

        //Just used _bus(IBus) instead of _distributedEventBus(IDistributedEventBus)
        await _bus.Publish(new OrderCancelledEto
        {
            PaymentRequestId = order.PaymentRequestId.GetValueOrDefault(),
            OrderId = order.Id,
            OrderDate = order.OrderDate,
            OrderNo = order.OrderNo,
            Buyer = GetBuyerEto(order.Buyer),
            Items = GetProductItemEtoList(order.OrderItems)
        });

        return await _orderRepository.UpdateAsync(order, autoSave: true);
    }
```

Note: You can define your model `OrderCancelledEto` as a class, interface or record but MassTransit recommends [record](https://docs.microsoft.com/en-US/dotnet/csharp/whats-new/csharp-9#record-types) as the best practice.

We're ready to focus on the consumer side (payment service). Firstly let's implement the configuration in `PaymentServiceHttpApiHostModule` under the `EShopOnAbp.PaymentService.HttpApi.Host`

```csharp
public class PaymentServiceHttpApiHostModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMassTransit(x =>
        {
            x.AddConsumer<OrderCancelledConsumer>();

            x.AddBus(provider => Bus.Factory.CreateUsingRabbitMq(cfg =>
            {
                cfg.Host("host", h =>
                {
                    h.Username("username");
                    h.Password("pwd");
                });
                cfg.ReceiveEndpoint("order-service", ep =>
                {
                    ep.ConfigureConsumer<OrderCancelledConsumer>(provider);
                });
            }));
        });
    }
}
```

Let's create `OrderCancelledConsumer` in the `EShopOnAbp.PaymentService.Domain`
```csharp
public class OrderCancelledConsumer : IConsumer<OrderCancelledEto>
{
    private readonly IPaymentRequestRepository _paymentRepository;
    public OrderCancelledConsumer(IPaymentRequestRepository paymentRepository)
    {
        _paymentRepository = paymentRepository;
    }
    public async Task Consume(ConsumeContext<OrderCancelledEto> context)
    {
        //Write your business code ...
        var payment = await _paymentRepository.GetAsync(context.Message.PaymentRequestId);
        Log.Information($"Cancelled the order: {payment.OrderId} payment:{payment.Id}");
    }
}
```

To complete this configuration you need to install the related packages on NuGet or via the below code
> Install-Package MassTransit.RabbitMQ -Version 8.0.6


In this article, we demonstrated how to publish and consume the events with the eShopOnAbp project by using MassTransit. For more detail, you can visit its [own official website](https://masstransit-project.com/getting-started/).

Regards.
