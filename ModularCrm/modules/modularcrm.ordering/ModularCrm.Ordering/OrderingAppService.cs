using ModularCrm.Ordering.Localization;
using Volo.Abp.Application.Services;

namespace ModularCrm.Ordering;

public abstract class OrderingAppService : ApplicationService
{
    protected OrderingAppService()
    {
        LocalizationResource = typeof(OrderingResource);
        ObjectMapperContext = typeof(OrderingModule);
    }
}
