using Volo.Abp.Application.Dtos;

namespace EventRegistration.Services.Events;

public class GetEventListInput : PagedAndSortedResultRequestDto
{
    public string? Filter { get; set; }
}
