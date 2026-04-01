using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;
using Microsoft.Extensions.Localization;
using BillMaster.Localization;

namespace BillMaster.Blazor.Client;

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
