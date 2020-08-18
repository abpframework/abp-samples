using DevExtremeSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DevExtremeSample.Permissions
{
    public class DevExtremeSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(DevExtremeSamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(DevExtremeSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<DevExtremeSampleResource>(name);
        }
    }
}
