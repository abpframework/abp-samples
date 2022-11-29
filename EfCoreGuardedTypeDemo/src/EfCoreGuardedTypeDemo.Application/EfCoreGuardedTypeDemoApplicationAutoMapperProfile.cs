using AutoMapper;
using EfCoreGuardedTypeDemo.Products;

namespace EfCoreGuardedTypeDemo;

public class EfCoreGuardedTypeDemoApplicationAutoMapperProfile : Profile
{
    public EfCoreGuardedTypeDemoApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Product, ProductDto>();
    }
}