using Volo.Abp.Settings;

namespace DatePickerTest.Settings;

public class DatePickerTestSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(DatePickerTestSettings.MySetting1));
    }
}
