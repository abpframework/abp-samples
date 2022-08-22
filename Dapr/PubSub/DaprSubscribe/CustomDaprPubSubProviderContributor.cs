using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Dapr.EventBus;
using Volo.Abp.AspNetCore.Mvc.Dapr.EventBus.Models;

namespace DaprSubscribe;

public class CustomDaprPubSubProviderContributor : IAbpAspNetCoreMvcDaprPubSubProviderContributor
{
    public Task ContributeAsync(AbpAspNetCoreMvcDaprPubSubProviderContributorContext context)
    {
        context.Subscriptions.Add(new AbpAspNetCoreMvcDaprSubscriptionDefinition()
        {
            PubSubName = "test-pubsub",
            Topic = "test-topic",
            Route = "test-route"
        });

        return Task.CompletedTask;;
    }
}

public class CustomPubSubController : AbpController
{
    [HttpPost("/test-route")]
    public Task<IActionResult> TestRouteAsync([FromBody]CustomPubSubModel model)
    {
        Console.WriteLine($"Received message: {model.Data.Id} {model.Data.Name}");
        return Task.FromResult<IActionResult>(Ok());
    }
}
