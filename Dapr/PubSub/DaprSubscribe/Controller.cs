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
    public async Task<IActionResult> PriceChangeAsync([FromBody]AbpDaprSubscriptionRequest<PriceChangedEto> model)
    {
        await HttpContext.ValidateDaprAppApiTokenAsync();

        Console.WriteLine($"OverrideEventBusController Received message: {model.Data.Price} {model.Data.ChangedDate}");

        return Ok();
    }
}

public class CustomPubSubController : AbpController
{
    [Topic("test-pubsub", "test-topic")]
    [HttpPost("/test-route")]
    public async Task<IActionResult> TestRouteAsync([FromBody] AbpDaprSubscriptionRequest<CustomPubSubDataModel> model)
    {
        await HttpContext.ValidateDaprAppApiTokenAsync();

        Console.WriteLine($"Received message: {model.Data.Id} {model.Data.Name}");

        return Ok();
    }
}
