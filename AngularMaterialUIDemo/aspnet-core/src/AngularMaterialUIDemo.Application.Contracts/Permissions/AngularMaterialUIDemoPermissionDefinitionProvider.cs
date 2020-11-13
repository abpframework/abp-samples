using AngularMaterialUIDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AngularMaterialUIDemo.Permissions
{
    public class AngularMaterialUIDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AngularMaterialUIDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(AngularMaterialUIDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AngularMaterialUIDemoResource>(name);
        }
    }
}
