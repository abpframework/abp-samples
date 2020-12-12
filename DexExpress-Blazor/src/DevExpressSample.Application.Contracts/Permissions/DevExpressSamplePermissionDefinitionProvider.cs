using DevExpressSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DevExpressSample.Permissions
{
    public class DevExpressSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(DevExpressSamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(DevExpressSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<DevExpressSampleResource>(name);
        }
    }
}
