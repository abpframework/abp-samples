using ModularCrm.Catalog;
using ModularCrm.Ordering;
using ModularCrm.Services;
using ModularCrm.Services.Orders;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Orders;

public class OrderReportingAppService :
    ModularCrmAppService,
    IOrderReportingAppService
{
    private readonly IRepository<Order, Guid> _orderRepository;
    private readonly IRepository<Product, Guid> _productRepository;

    public OrderReportingAppService(
        IRepository<Order, Guid> orderRepository,
        IRepository<Product, Guid> productRepository)
    {
        _orderRepository = orderRepository;
        _productRepository = productRepository;
    }

    public async Task<List<OrderReportDto>> GetLatestOrders()
    {
        var orders = await _orderRepository.GetQueryableAsync();
        var products = await _productRepository.GetQueryableAsync();

        var latestOrders = (from order in orders
                            join product in products on order.ProductId equals product.Id
                            orderby order.CreationTime descending
                            select new OrderReportDto
                            {
                                OrderId = order.Id,
                                CustomerName = order.CustomerName,
                                State = order.State,
                                ProductId = product.Id,
                                ProductName = product.Name
                            })
            .Take(10)
            .ToList();

        return latestOrders;
    }
}