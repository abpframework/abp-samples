using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using QuickBills.Localization;

namespace QuickBills.Blazor.Client;

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
