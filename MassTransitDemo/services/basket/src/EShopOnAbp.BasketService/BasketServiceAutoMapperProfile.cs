using AutoMapper;
using EShopOnAbp.CatalogService.Grpc;
using EShopOnAbp.CatalogService.Products;

namespace EShopOnAbp.BasketService;

public class BasketServiceApplicationAutoMapperProfile : Profile
{
    public BasketServiceApplicationAutoMapperProfile()
    {
        CreateMap<ProductEto, ProductDto>();
        CreateMap<ProductResponse, ProductDto>();
    }
}