using AutoMapper;
using Volo.Abp.AutoMapper;

namespace ModularCrm.Ordering;

public class OrderingApplicationAutoMapperProfile : Profile
{
    public OrderingApplicationAutoMapperProfile()
    {
        CreateMap<Order, OrderDto>()
            .Ignore(x => x.ProductName); // New line
    }
}