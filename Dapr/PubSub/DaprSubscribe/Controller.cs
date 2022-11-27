using System;
using System.Threading.Tasks;
using Dapr;
using Microsoft.AspNetCore.Mvc;
using Shared;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Dapr;


namespace DaprSubscribe;

public class OverrideEventBusController : AbpController
{
    [HttpPost("/price-changed")]
    [Topic("test-pubsub", "PriceChanged")]
    public Task<IActionResult> PriceChangeAsync([FromBody]PriceChangedEto model)
    {
        HttpContext.ValidateDaprAppApiToken();

        Console.WriteLine($"OverrideEventBusController Received message: {model.Price} {model.ChangedDate}");

        return Task.FromResult<IActionResult>(Ok());
    }
}

public class CustomPubSubController : AbpController
{
    [Topic("test-pubsub", "test-topic")]
    [HttpPost("/test-route")]
    public Task<IActionResult> TestRouteAsync([FromBody]CustomPubSubDataModel model)
    {
        HttpContext.ValidateDaprAppApiToken();

        Console.WriteLine($"Received message: {model.Id} {model.Name}");

        return Task.FromResult<IActionResult>(Ok());
    }
}
