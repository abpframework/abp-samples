using SignalRDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SignalRDemo.Permissions
{
    public class SignalRDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SignalRDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(SignalRDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SignalRDemoResource>(name);
        }
    }
}
