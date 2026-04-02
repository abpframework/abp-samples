using Volo.Abp.Application.Dtos;

namespace TravelPlanner.Services.Discovery;

public class GetDiscoveryLocationsInput : PagedResultRequestDto
{
    public string? Category { get; set; }
    public string? SearchKeyword { get; set; }

    public GetDiscoveryLocationsInput()
    {
        MaxResultCount = 9;
    }
}
