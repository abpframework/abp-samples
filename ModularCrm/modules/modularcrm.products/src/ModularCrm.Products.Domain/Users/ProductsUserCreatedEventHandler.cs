using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Users;

namespace ModularCrm.Products.Users;

public class ProductsUserCreatedEventHandler : IDistributedEventHandler<EntityCreatedEto<UserEto>>, ITransientDependency
{
    private readonly ILogger<ProductsUserCreatedEventHandler> _logger;

    public ProductsUserCreatedEventHandler(ILogger<ProductsUserCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task HandleEventAsync(EntityCreatedEto<UserEto> eventData)
    {
        _logger.LogInformation("[Products Module] UserCreated event received: UserId: {0}, UserName: {1}", eventData.Entity.Id, eventData.Entity.UserName);
        _logger.LogInformation($"[Products Module] Sending a popular products email to {eventData.Entity.Email}...");

        return Task.CompletedTask;
    }
}
