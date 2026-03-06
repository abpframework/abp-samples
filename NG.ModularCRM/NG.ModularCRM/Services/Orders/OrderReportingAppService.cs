using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ModularCrm.Catalog;
using ModularCrm.Ordering;
using NG.ModularCRM.Services.Dtos.Orders;
using Volo.Abp.Domain.Repositories;

namespace NG.ModularCRM.Services.Orders;

public class OrderReportingAppService : ModularCRMAppService, IOrderReportingAppService
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

        var query = from order in orders
                    join product in products on order.ProductId equals product.Id
                    orderby order.CreationTime descending
                    select new OrderReportDto
                    {
                        OrderId = order.Id,
                        CustomerName = order.CustomerName,
                        State = order.State,
                        ProductId = product.Id,
                        ProductName = product.Name
                    };

        return await AsyncExecuter.ToListAsync(query.Take(10));
    }
}
