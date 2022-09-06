using System;
using System.Linq.Expressions;
using Volo.Abp.Specifications;

namespace EShopOnAbp.OrderingService.Orders.Specifications;

public class MonthsAgoSpecification : Specification<Order>
{
    protected int NumberOfMonths { get; set; }

    public MonthsAgoSpecification(int months)
    {
        NumberOfMonths = months;
    }

    public override Expression<Func<Order, bool>> ToExpression()
    {
        var monthsAgo = DateTime.UtcNow.AddMonths(-NumberOfMonths);
        return query => query.OrderDate >= monthsAgo;
    }
}