using SignInWithoutSpecifyingTenant.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SignInWithoutSpecifyingTenant.Permissions
{
    public class SignInWithoutSpecifyingTenantPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SignInWithoutSpecifyingTenantPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(SignInWithoutSpecifyingTenantPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SignInWithoutSpecifyingTenantResource>(name);
        }
    }
}
