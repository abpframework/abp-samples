using Volo.Abp.Settings;

namespace ImageManipulationDemo.Settings;

public class ImageManipulationDemoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ImageManipulationDemoSettings.MySetting1));
    }
}
