using ModularCrm.Localization;
using Volo.Abp.AspNetCore.Components;

namespace ModularCrm;

public abstract class ModularCrmComponentBase : AbpComponentBase
{
    protected ModularCrmComponentBase()
    {
        LocalizationResource = typeof(ModularCrmResource);
    }
}
