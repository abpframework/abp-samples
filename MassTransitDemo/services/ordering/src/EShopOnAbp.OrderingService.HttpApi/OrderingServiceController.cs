using EShopOnAbp.OrderingService.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EShopOnAbp.OrderingService
{
    public abstract class OrderingServiceController : AbpControllerBase
    {
        protected OrderingServiceController()
        {
            LocalizationResource = typeof(OrderingServiceResource);
        }
    }
}
