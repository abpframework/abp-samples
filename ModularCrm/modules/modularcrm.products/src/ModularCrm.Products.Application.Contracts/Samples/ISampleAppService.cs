using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Products.Samples;

public interface ISampleAppService : IApplicationService
{
    Task<SampleDto> GetAsync();

    Task<SampleDto> GetAuthorizedAsync();
}
