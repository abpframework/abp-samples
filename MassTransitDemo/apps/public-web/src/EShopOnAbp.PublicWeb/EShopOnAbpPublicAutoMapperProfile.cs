using AutoMapper;
using EShopOnAbp.BasketService.Services;
using EShopOnAbp.OrderingService.Orders;
using EShopOnAbp.PaymentService.PaymentRequests;
using Volo.Abp.AutoMapper;

namespace EShopOnAbp.PublicWeb
{
    public class EShopOnAbpPublicAutoMapperProfile : Profile
    {
        public EShopOnAbpPublicAutoMapperProfile()
        {
            CreateMap<BasketItemDto, PaymentRequestProductCreationDto>()
                .ForMember(p => p.ReferenceId, opts => opts.MapFrom(p => p.ProductId.ToString()))
                .ForMember(p => p.Code, opts => opts.MapFrom(p => p.ProductCode))
                .ForMember(p => p.Name, opts => opts.MapFrom(p => p.ProductName))
                .ForMember(p => p.UnitPrice, opts => opts.MapFrom(p => p.TotalPrice / p.Count))
                .ForMember(p => p.Quantity, opts => opts.MapFrom(p => p.Count));

            CreateMap<BasketItemDto, OrderItemCreateDto>()
                .ForMember(p => p.UnitPrice, opts => opts.MapFrom(q => q.TotalPrice / q.Count))
                .ForMember(p => p.Units, opts => opts.MapFrom(q => q.Count))
                .ForMember(p => p.PictureUrl, opts => opts.MapFrom(q => q.ImageName))
                .Ignore(q => q.Discount);
        }
    }
}