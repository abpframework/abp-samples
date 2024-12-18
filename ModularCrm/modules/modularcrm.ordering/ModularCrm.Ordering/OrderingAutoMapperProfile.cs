using AutoMapper;
using ModularCrm.Ordering.Entities;
using ModularCrm.Ordering.Services;

namespace ModularCrm.Ordering;

public class OrderingAutoMapperProfile : Profile
{
    public OrderingAutoMapperProfile()
    {
        CreateMap<Order, OrderDto>();
    }
}
