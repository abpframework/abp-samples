using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Specifications;

namespace EShopOnAbp.OrderingService.Orders;

public interface IOrderRepository : IRepository<Order, Guid>
{
    Task<List<Order>> GetOrdersByUserId(
        Guid userId,
        ISpecification<Order> spec,
        bool includeDetails = true,
        CancellationToken cancellationToken = default);

    Task<List<Order>> GetOrdersAsync(
        ISpecification<Order> spec,
        bool includeDetails = true,
        CancellationToken cancellationToken = default);

    Task<List<OrderItem>> GetTopSelling(
        ISpecification<Order> spec,
        bool includeDetails = true,
        CancellationToken cancellationToken = default);

    Task<List<Order>> GetPercentOfTotalPayment(
        ISpecification<Order> spec,
        CancellationToken cancellationToken = default);

    Task<List<Order>> GetCountOfTotalOrderStatus(
        ISpecification<Order> spec,
        bool includeDetails = true,
        CancellationToken cancellationToken = default);
    
    Task<Order> GetByOrderNoAsync(int orderNo,
        bool includeDetails = true,
        CancellationToken cancellationToken = default);
}