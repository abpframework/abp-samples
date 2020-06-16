using CustomApplicationModules.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CustomApplicationModules.Permissions
{
    public class CustomApplicationModulesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CustomApplicationModulesPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(CustomApplicationModulesPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CustomApplicationModulesResource>(name);
        }
    }
}
