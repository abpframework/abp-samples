using UnifiedContextsDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace UnifiedContextsDemo.Permissions
{
    public class UnifiedContextsDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(UnifiedContextsDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(UnifiedContextsDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<UnifiedContextsDemoResource>(name);
        }
    }
}
