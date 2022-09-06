using EShopOnAbp.PaymentService.Localization;
using Volo.Abp.Application.Services;

namespace EShopOnAbp.PaymentService
{
    public abstract class PaymentServiceAppService : ApplicationService
    {
        protected PaymentServiceAppService()
        {
            LocalizationResource = typeof(PaymentServiceResource);
            ObjectMapperContext = typeof(PaymentServiceApplicationModule);
        }
    }
}
