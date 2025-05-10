using AbpAiChat.Localization;
using Volo.Abp.AspNetCore.Components;

namespace AbpAiChat;

public abstract class AbpAiChatComponentBase : AbpComponentBase
{
    protected AbpAiChatComponentBase()
    {
        LocalizationResource = typeof(AbpAiChatResource);
    }
}
