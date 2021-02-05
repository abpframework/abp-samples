using CustomAngularAppWithIdentityServer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace CustomAngularAppWithIdentityServer.Permissions
{
    public class CustomAngularAppWithIdentityServerPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CustomAngularAppWithIdentityServerPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(CustomAngularAppWithIdentityServerPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CustomAngularAppWithIdentityServerResource>(name);
        }
    }
}
