using SocialGallery.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SocialGallery.Permissions
{
    public class SocialGalleryPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SocialGalleryPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(SocialGalleryPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SocialGalleryResource>(name);
        }
    }
}
