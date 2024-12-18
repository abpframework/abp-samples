using ModularCrm.Products.Localization;
using Volo.Abp.Application.Services;

namespace ModularCrm.Products;

public abstract class ProductsAppService : ApplicationService
{
    protected ProductsAppService()
    {
        LocalizationResource = typeof(ProductsResource);
        ObjectMapperContext = typeof(ProductsApplicationModule);
    }
}
