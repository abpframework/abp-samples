using Volo.Abp.Settings;

namespace FileActionsDemo.Settings
{
    public class FileActionsDemoSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(FileActionsDemoSettings.MySetting1));
        }
    }
}
