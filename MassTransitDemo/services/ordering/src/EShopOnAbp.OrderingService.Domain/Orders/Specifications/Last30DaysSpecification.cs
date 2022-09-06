using System;
using System.Linq.Expressions;
using Volo.Abp.Specifications;

namespace EShopOnAbp.OrderingService.Orders.Specifications;

public class Last30DaysSpecification : Specification<Order>
{
    public override Expression<Func<Order, bool>> ToExpression()
    {
        var daysAgo30 = DateTime.UtcNow.Subtract(TimeSpan.FromDays(30));
        return query => query.OrderDate >= daysAgo30
            ;
        // && query.OrderDate <= DateTime.UtcNow;
    }
}