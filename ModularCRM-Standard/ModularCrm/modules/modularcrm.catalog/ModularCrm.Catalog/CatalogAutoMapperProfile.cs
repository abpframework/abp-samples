using AutoMapper;

namespace ModularCrm.Catalog;

public class CatalogAutoMapperProfile : Profile
{
    public CatalogAutoMapperProfile()
    {
        CreateMap<Product, ProductDto>();
    }
}
