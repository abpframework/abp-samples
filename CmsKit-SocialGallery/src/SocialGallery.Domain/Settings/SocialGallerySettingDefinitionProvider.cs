using Volo.Abp.Settings;

namespace SocialGallery.Settings
{
    public class SocialGallerySettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(SocialGallerySettings.MySetting1));
        }
    }
}
