using AutoMapper;
using EShopOnAbp.CatalogService.Products;

namespace EShopOnAbp.CatalogService
{
    public class CatalogServiceDomainAutoMapperProfile : Profile
    {
        public CatalogServiceDomainAutoMapperProfile()
        {
            CreateMap<Product, ProductEto>();
        }
    }
}
