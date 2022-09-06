using System.Linq;
using EShopOnAbp.OrderingService.Orders;
using Microsoft.EntityFrameworkCore;

public static class EfCoreOrderQueryableExtensions
{
    public static IQueryable<Order> IncludeDetails(this IQueryable<Order> queryable, bool include = true)
    {
        return !include
            ? queryable
            : queryable
                .Include(q => q.OrderStatus)
                .Include(q => q.Address)
                .Include(q => q.Buyer)
                .Include(q => q.OrderItems);
    }
}