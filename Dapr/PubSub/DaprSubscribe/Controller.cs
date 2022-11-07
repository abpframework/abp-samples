using System;
using System.Threading.Tasks;
using Dapr;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Dapr;
using Volo.Abp.AspNetCore.Mvc.Dapr.EventBus;
using Volo.Abp.AspNetCore.Mvc.Dapr.EventBus.Models;

namespace DaprSubscribe;

public class OverrideEventBusController : AbpController
{
    [HttpPost("/price-changed")]
    [Topic("test-pubsub", "PriceChanged")]
    public Task<IActionResult> PriceChangeAsync([FromBody]AbpDaprSubscriptionRequest<PriceChangedEto> model)
    {
        HttpContext.ValidateDaprAppApiToken();

        Console.WriteLine($"OverrideEventBusController Received message: {model.Data.Price} {model.Data.ChangedDate}");

        return Task.FromResult<IActionResult>(Ok());
    }
}

public class CustomPubSubController : AbpController
{
    [Topic("test-pubsub", "test-topic")]
    [HttpPost("/test-route")]
    public Task<IActionResult> TestRouteAsync([FromBody] AbpDaprSubscriptionRequest<CustomPubSubDataModel> model)
    {
        HttpContext.ValidateDaprAppApiToken();

        Console.WriteLine($"Received message: {model.Data.Id} {model.Data.Name}");

        return Task.FromResult<IActionResult>(Ok());
    }
}
