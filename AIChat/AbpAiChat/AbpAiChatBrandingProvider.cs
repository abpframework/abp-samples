using Microsoft.Extensions.Localization;
using AbpAiChat.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace AbpAiChat;

[Dependency(ReplaceServices = true)]
public class AbpAiChatBrandingProvider : DefaultBrandingProvider
{
    private IStringLocalizer<AbpAiChatResource> _localizer;

    public AbpAiChatBrandingProvider(IStringLocalizer<AbpAiChatResource> localizer)
    {
        _localizer = localizer;
    }

    public override string AppName => _localizer["AppName"];
}
