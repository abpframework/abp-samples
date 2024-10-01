using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Ordering.Contracts.Services;

public interface IOrderAppService : IApplicationService
{
    Task<List<OrderDto>> GetListAsync();
    Task CreateAsync(OrderCreationDto input);
}