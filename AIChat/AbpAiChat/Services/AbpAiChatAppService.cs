using Volo.Abp.Application.Services;
using AbpAiChat.Localization;

namespace AbpAiChat.Services;

/* Inherit your application services from this class. */
public abstract class AbpAiChatAppService : ApplicationService
{
    protected AbpAiChatAppService()
    {
        LocalizationResource = typeof(AbpAiChatResource);
    }
}