using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TravelPlanner.Services.Travels;

public interface ITravelAppService : ICrudAppService<
    TravelDto,
    Guid,
    GetTravelsInput,
    CreateUpdateTravelDto>
{
    Task<List<TravelDto>> GetUpcomingTravelsAsync();
}
