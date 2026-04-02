using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelPlanner.Services.Discovery;

public interface IDiscoveryAppService : IApplicationService
{
    Task<PagedResultDto<DiscoveryLocationDto>> GetLocationsAsync(GetDiscoveryLocationsInput input);
    Task<DiscoveryLocationDto> GetLocationDetailAsync(string xid);
}
