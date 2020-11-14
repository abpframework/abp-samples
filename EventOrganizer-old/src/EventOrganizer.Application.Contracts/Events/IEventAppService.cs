using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EventOrganizer.Events
{
    public interface IEventAppService : IApplicationService
    {
        Task<Guid> CreateAsync(EventCreationDto input);

        Task<EventDetailDto> GetAsync(Guid id);

        Task<List<EventDto>> GetUpcomingAsync();

        Task RegisterAsync(Guid id);

        Task UnRegisterAsync(Guid id);

        Task DeleteAsync(Guid id);
    }
}
