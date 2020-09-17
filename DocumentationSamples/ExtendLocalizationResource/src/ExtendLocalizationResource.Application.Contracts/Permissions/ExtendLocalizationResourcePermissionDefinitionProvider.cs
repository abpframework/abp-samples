using ExtendLocalizationResource.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ExtendLocalizationResource.Permissions
{
    public class ExtendLocalizationResourcePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ExtendLocalizationResourcePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ExtendLocalizationResourcePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ExtendLocalizationResourceResource>(name);
        }
    }
}
