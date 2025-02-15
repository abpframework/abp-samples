using ModularCrm.Payment.Localization;
using Volo.Abp.Application.Services;

namespace ModularCrm.Payment;

public abstract class PaymentAppServiceBase : ApplicationService
{
    protected PaymentAppServiceBase()
    {
        LocalizationResource = typeof(PaymentResource);
        ObjectMapperContext = typeof(PaymentModule);
    }
}
