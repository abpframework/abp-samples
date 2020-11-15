using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EventOrganizer.Events
{
    public interface IEventAppService : IApplicationService
    {
        Task<Guid> CreateAsync(EventCreationDto input);

        Task<List<EventDto>> GetUpcomingAsync();

        Task<EventDetailDto> GetAsync(Guid id);

        Task RegisterAsync(Guid id);

        Task UnregisterAsync(Guid id);

        Task DeleteAsync(Guid id);
    }
}
