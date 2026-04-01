using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using QuickBills.Localization;
using Volo.Abp.AspNetCore.Components;

namespace QuickBills.Blazor.Client;

public abstract class QuickBillsComponentBase : AbpComponentBase
{
    [Inject]
    protected IJSRuntime JSRuntime { get; set; } = default!;

    protected QuickBillsComponentBase()
    {
        LocalizationResource = typeof(QuickBillsResource);
    }
}
