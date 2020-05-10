using Volo.Abp.Settings;

namespace PostgeSqlDemo.Settings
{
    public class PostgeSqlDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(PostgeSqlDemoSettings.MySetting1));
        }
    }
}
