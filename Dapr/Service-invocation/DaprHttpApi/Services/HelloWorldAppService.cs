using System.Threading.Tasks;
using Shared;
using Volo.Abp.Application.Services;

namespace DaprHttpApi.Services;

public class HelloWorldAppService : ApplicationService ,  IHelloWorldAppService
{
    public Task<string> SayHelloAsync()
    {
        return Task.FromResult("Hello world");
    }

    public async Task<SayHelloResult> SayHello2Async()
    {
        return new SayHelloResult
        {
            Result = "Hello world 2"
        };
    }
}
