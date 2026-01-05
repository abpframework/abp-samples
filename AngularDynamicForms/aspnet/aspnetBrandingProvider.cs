using Microsoft.Extensions.Localization;
using aspnet.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace aspnet;

[Dependency(ReplaceServices = true)]
public class aspnetBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<aspnetResource> _localizer;

    public aspnetBrandingProvider(IStringLocalizer<aspnetResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}