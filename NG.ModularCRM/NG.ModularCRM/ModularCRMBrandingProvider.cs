using Microsoft.Extensions.Localization;
using NG.ModularCRM.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace NG.ModularCRM;

[Dependency(ReplaceServices = true)]
public class ModularCRMBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<ModularCRMResource> _localizer;

    public ModularCRMBrandingProvider(IStringLocalizer<ModularCRMResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}