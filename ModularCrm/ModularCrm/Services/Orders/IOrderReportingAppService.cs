using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Orders;

public interface IOrderReportingAppService : IApplicationService
{
    Task<List<OrderReportDto>> GetLatestOrders();
}