using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace OpenIddictDemo
{
    public interface IDemoAppService : IApplicationService
    {
        Task<DemoDto> GetAsync();
    }
}
