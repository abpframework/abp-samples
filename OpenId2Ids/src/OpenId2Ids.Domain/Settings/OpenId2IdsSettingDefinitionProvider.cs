using Volo.Abp.Settings;

namespace OpenId2Ids.Settings;

public class OpenId2IdsSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(OpenId2IdsSettings.MySetting1));
    }
}
