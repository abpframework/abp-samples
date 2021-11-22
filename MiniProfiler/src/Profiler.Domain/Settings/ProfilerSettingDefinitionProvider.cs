using Volo.Abp.Settings;

namespace Profiler.Settings
{
    public class ProfilerSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(ProfilerSettings.MySetting1));
        }
    }
}
