using Acme.BookStore.AngularMaterial.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Acme.BookStore.AngularMaterial.Permissions
{
    public class AngularMaterialPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AngularMaterialPermissions.GroupName);
            
            var authorsPermission = myGroup.AddPermission(
                AngularMaterialPermissions.Authors.Default, L("Permission:Authors"));

            authorsPermission.AddChild(
                AngularMaterialPermissions.Authors.Create, L("Permission:Authors.Create"));

            authorsPermission.AddChild(
                AngularMaterialPermissions.Authors.Edit, L("Permission:Authors.Edit"));

            authorsPermission.AddChild(
                AngularMaterialPermissions.Authors.Delete, L("Permission:Authors.Delete"));

            //Define your own permissions here. Example:
            //myGroup.AddPermission(AngularMaterialPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AngularMaterialResource>(name);
        }
    }
}
