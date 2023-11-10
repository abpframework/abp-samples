using System.Threading.Tasks;
using InterceptionSampleMongoApp.Interception;
using Microsoft.AspNetCore.Mvc;

namespace InterceptionSampleMongoApp.Controllers;

[Route("api/app/watcher-service")]
public class WatcherController : InterceptionSampleMongoAppController
{
    protected IWatcherAppService WatcherAppService { get; }

    public WatcherController(IWatcherAppService watcherAppService)
    {
        WatcherAppService = watcherAppService;
    }

    [HttpPost("method4")]
    public Task Method4Async()
    {
        return WatcherAppService.Method4Async();
    }
}