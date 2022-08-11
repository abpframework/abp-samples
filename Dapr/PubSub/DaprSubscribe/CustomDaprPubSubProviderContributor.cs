using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Volo.Abp.AspNetCore.Dapr;
using Volo.Abp.AspNetCore.Dapr.Models;
using Volo.Abp.AspNetCore.Mvc;

namespace DaprSubscribe;

public class CustomDaprPubSubProviderContributor : IAbpAspNetCoreDaprPubSubProviderContributor
{
    public Task ContributeAsync(AbpAspNetCoreDaprPubSubProviderContributorContext context)
    {
        context.Subscriptions.Add(new AbpAspNetCoreDaprSubscriptionDefinition()
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
