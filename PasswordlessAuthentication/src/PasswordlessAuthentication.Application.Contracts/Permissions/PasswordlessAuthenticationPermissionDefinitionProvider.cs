using PasswordlessAuthentication.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace PasswordlessAuthentication.Permissions
{
    public class PasswordlessAuthenticationPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(PasswordlessAuthenticationPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(PasswordlessAuthenticationPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PasswordlessAuthenticationResource>(name);
        }
    }
}
