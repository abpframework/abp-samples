using System;
using Volo.Abp.Specifications;

namespace EShopOnAbp.OrderingService.Orders.Specifications;

public static class SpecificationFactory
{
    public static ISpecification<Order> Create(string filter)
    {
        if (filter.IsNullOrEmpty())
        {
            return new Last30DaysSpecification();
        }

        if (filter.StartsWith("y"))
        {
            var year = int.Parse(filter.Split('y')[1]);
            return new YearSpecification(year);
        }

        if (filter.StartsWith("m"))
        {
            var months = int.Parse(filter.Split('m')[1]);
            return new MonthsAgoSpecification(months);
        }

        return new Last30DaysSpecification();
    }
}