using Microsoft.Extensions.Localization;
using BillMaster.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace BillMaster.Blazor;

[Dependency(ReplaceServices = true)]
public class BillMasterBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<BillMasterResource> _localizer;

    public BillMasterBrandingProvider(IStringLocalizer<BillMasterResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
