using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Shared;

public interface IHelloWorldAppService : IApplicationService
{
    Task<string> SayHelloAsync();

    Task<SayHelloResult> SayHello2Async();
}
