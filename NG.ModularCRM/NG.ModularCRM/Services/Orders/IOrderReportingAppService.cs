using System.Collections.Generic;
using System.Threading.Tasks;
using NG.ModularCRM.Services.Dtos.Orders;
using Volo.Abp.Application.Services;

namespace NG.ModularCRM.Services.Orders;

public interface IOrderReportingAppService : IApplicationService
{
    Task<List<OrderReportDto>> GetLatestOrders();
}
