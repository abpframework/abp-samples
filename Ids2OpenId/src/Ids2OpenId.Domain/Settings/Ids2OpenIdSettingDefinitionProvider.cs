using Volo.Abp.Settings;

namespace Ids2OpenId.Settings;

public class Ids2OpenIdSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(Ids2OpenIdSettings.MySetting1));
    }
}
