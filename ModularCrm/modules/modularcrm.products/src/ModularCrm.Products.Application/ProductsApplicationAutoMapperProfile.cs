using AutoMapper;

namespace ModularCrm.Products;

public class ProductsApplicationAutoMapperProfile : Profile
{
    public ProductsApplicationAutoMapperProfile()
    {
        CreateMap<Product, ProductDto>();
    }
}
