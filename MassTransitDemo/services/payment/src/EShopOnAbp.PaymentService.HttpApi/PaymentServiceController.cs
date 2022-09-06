using EShopOnAbp.PaymentService.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace EShopOnAbp.PaymentService
{
    public abstract class PaymentServiceController : AbpControllerBase
    {
        protected PaymentServiceController()
        {
            LocalizationResource = typeof(PaymentServiceResource);
        }
    }
}
