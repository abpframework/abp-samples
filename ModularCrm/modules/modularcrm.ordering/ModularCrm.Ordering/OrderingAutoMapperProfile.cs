using AutoMapper;
using ModularCrm.Ordering.Entities;
using ModularCrm.Ordering.Services;
using Volo.Abp.AutoMapper;

namespace ModularCrm.Ordering;

public class OrderingAutoMapperProfile : Profile
{
    public OrderingAutoMapperProfile()
    {
        CreateMap<Order, OrderDto>()
            .Ignore(x => x.ProductName);
    }
}
