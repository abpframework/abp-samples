using Microsoft.Extensions.Localization;
using QuickBills.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace QuickBills.Blazor;

[Dependency(ReplaceServices = true)]
public class QuickBillsBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<QuickBillsResource> _localizer;

    public QuickBillsBrandingProvider(IStringLocalizer<QuickBillsResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
