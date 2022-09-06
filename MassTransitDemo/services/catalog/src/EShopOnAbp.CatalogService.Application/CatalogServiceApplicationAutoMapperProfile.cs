using AutoMapper;
using EShopOnAbp.CatalogService.Grpc;
using EShopOnAbp.CatalogService.Products;

namespace EShopOnAbp.CatalogService
{
    public class CatalogServiceApplicationAutoMapperProfile : Profile
    {
        public CatalogServiceApplicationAutoMapperProfile()
        {
            CreateMap<Product, ProductDto>();
            CreateMap<Product, ProductResponse>();
        }
    }
}
