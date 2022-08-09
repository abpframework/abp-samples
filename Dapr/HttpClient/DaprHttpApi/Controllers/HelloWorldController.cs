using Microsoft.AspNetCore.Mvc;
using Shared;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;

namespace DaprHttpApi.Controllers;

[RemoteService(Name = "default")]
[Area("app")]
[ControllerName("HelloWorld")]
[Route("api/helloworld")]
public class HelloWorldController : AbpControllerBase, IHelloWorldAppService
{
    private readonly IHelloWorldAppService _helloWorldAppService;
    
    public HelloWorldController(IHelloWorldAppService helloWorldAppService)
    {
        _helloWorldAppService = helloWorldAppService;
    }

    [HttpGet]
    public async Task<string> SayHelloAsync()
    {
        return await _helloWorldAppService.SayHelloAsync();
    }
}