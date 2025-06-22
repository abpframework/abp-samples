using ModularCrm.Orders;
using Volo.Abp.Application.Services;

namespace ModularCrm.Services.Orders;

public interface IOrderReportingAppService : IApplicationService
{
    Task<List<OrderReportDto>> GetLatestOrders();
}