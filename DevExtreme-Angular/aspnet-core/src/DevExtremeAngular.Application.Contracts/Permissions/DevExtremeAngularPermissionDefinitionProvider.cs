using DevExtremeAngular.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DevExtremeAngular.Permissions
{
    public class DevExtremeAngularPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(DevExtremeAngularPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(DevExtremeAngularPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<DevExtremeAngularResource>(name);
        }
    }
}
