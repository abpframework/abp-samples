using CustomNgAppWithIdentityServer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace CustomNgAppWithIdentityServer.Permissions
{
    public class CustomNgAppWithIdentityServerPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(CustomNgAppWithIdentityServerPermissions.GroupName);

            myGroup.AddPermission(CustomNgAppWithIdentityServerPermissions.Dashboard.Host, L("Permission:Dashboard"), MultiTenancySides.Host);
            myGroup.AddPermission(CustomNgAppWithIdentityServerPermissions.Dashboard.Tenant, L("Permission:Dashboard"), MultiTenancySides.Tenant);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(CustomNgAppWithIdentityServerPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CustomNgAppWithIdentityServerResource>(name);
        }
    }
}