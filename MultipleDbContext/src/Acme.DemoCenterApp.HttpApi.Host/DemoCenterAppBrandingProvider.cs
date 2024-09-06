using Microsoft.Extensions.Localization;
using Acme.DemoCenterApp.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Acme.DemoCenterApp;

[Dependency(ReplaceServices = true)]
public class DemoCenterAppBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<DemoCenterAppResource> _localizer;

    public DemoCenterAppBrandingProvider(IStringLocalizer<DemoCenterAppResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
