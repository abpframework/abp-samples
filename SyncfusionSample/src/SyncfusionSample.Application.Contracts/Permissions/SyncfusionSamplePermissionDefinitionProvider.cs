using SyncfusionSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SyncfusionSample.Permissions
{
    public class SyncfusionSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SyncfusionSamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(SyncfusionSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SyncfusionSampleResource>(name);
        }
    }
}
