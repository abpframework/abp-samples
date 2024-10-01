using AutoMapper;
using ModularCrm.Ordering.Contracts.Services;
using ModularCrm.Ordering.Entities;
using Volo.Abp.AutoMapper;

namespace ModularCrm.Ordering;

public class OrderingApplicationAutoMapperProfile : Profile
{
    public OrderingApplicationAutoMapperProfile()
    {
        CreateMap<Order, OrderDto>()
            .Ignore(x => x.ProductName);
    }
}
