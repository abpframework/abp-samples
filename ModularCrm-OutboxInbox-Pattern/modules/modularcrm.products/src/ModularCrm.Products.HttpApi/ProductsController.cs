using ModularCrm.Products.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace ModularCrm.Products;

public abstract class ProductsController : AbpControllerBase
{
    protected ProductsController()
    {
        LocalizationResource = typeof(ProductsResource);
    }
}
