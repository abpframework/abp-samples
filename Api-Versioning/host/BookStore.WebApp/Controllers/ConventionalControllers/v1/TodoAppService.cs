using System.Threading.Tasks;
using Volo.Abp.ApiVersioning;
using Volo.Abp.Application.Services;

namespace BookStore.Controllers.ConventionalControllers.v1;

public class TodoAppService : ApplicationService, ITodoAppService
{
    private readonly IRequestedApiVersion _requestedApiVersion;

    public TodoAppService(IRequestedApiVersion requestedApiVersion)
    {
        _requestedApiVersion = requestedApiVersion;
    }

    public Task<string> GetAsync()
    {
        return Task.FromResult(_requestedApiVersion.Current ?? "none");
    }
}
