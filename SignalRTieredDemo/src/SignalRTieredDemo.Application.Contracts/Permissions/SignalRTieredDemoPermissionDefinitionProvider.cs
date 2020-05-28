using SignalRTieredDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SignalRTieredDemo.Permissions
{
    public class SignalRTieredDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SignalRTieredDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(SignalRTieredDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SignalRTieredDemoResource>(name);
        }
    }
}
