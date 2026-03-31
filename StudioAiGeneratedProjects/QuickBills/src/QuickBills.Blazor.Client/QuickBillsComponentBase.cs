using QuickBills.Localization;
using Volo.Abp.AspNetCore.Components;

namespace QuickBills.Blazor.Client;

public abstract class QuickBillsComponentBase : AbpComponentBase
{
    protected QuickBillsComponentBase()
    {
        LocalizationResource = typeof(QuickBillsResource);
    }
}
