using ModularCrm.Catalog.Localization;
using Volo.Abp.Application.Services;

namespace ModularCrm.Catalog;

public abstract class CatalogAppService : ApplicationService
{
    protected CatalogAppService()
    {
        LocalizationResource = typeof(CatalogResource);
        ObjectMapperContext = typeof(CatalogModule);
    }
}
