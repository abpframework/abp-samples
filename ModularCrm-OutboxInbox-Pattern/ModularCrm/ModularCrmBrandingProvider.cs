using Microsoft.Extensions.Localization;
using ModularCrm.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace ModularCrm;

[Dependency(ReplaceServices = true)]
public class ModularCrmBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<ModularCrmResource> _localizer;

    public ModularCrmBrandingProvider(IStringLocalizer<ModularCrmResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}