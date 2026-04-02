using TravelPlanner.Entities;
using Volo.Abp.Application.Dtos;

namespace TravelPlanner.Services.Travels;

public class GetTravelsInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
    public TravelStatus? Status { get; set; }
}
