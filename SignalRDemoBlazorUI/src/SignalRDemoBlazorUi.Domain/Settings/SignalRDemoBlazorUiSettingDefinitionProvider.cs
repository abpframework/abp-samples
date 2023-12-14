using Volo.Abp.Settings;

namespace SignalRDemoBlazorUi.Settings;

public class SignalRDemoBlazorUiSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(SignalRDemoBlazorUiSettings.MySetting1));
    }
}
