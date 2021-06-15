using ConcurrencyDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ConcurrencyDemo.Permissions
{
    public class ConcurrencyDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ConcurrencyDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ConcurrencyDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ConcurrencyDemoResource>(name);
        }
    }
}
