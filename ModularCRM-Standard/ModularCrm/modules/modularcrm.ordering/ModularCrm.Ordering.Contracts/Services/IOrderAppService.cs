using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Ordering.Contracts.Services;
using Volo.Abp.Application.Services;

namespace ModularCrm.Ordering.Services;

public interface IOrderAppService : IApplicationService
{
    Task<List<OrderDto>> GetListAsync();
    Task CreateAsync(OrderCreationDto input);
}