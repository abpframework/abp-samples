using Volo.Abp.Settings;

namespace EventOrganizer.Settings
{
    public class EventOrganizerSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(EventOrganizerSettings.MySetting1));
        }
    }
}
