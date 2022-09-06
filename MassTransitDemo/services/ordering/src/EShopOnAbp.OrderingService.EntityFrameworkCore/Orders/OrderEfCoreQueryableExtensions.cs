using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace EShopOnAbp.OrderingService.Orders;

public static class OrderEfCoreQueryableExtensions
{
    public static IQueryable<Order> IncludeDetails(this IQueryable<Order> queryable, bool include = true)
    {
        if (!include)
        {
            return queryable;
        }

        return queryable
            .Include(x => x.Address)
            .Include(x => x.Buyer)
            .Include(x => x.OrderItems);
    }
}