using Volo.Abp.Settings;

namespace ProfilerTiered.Settings
{
    public class ProfilerTieredSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ProfilerTieredSettings.MySetting1));
        }
    }
}
