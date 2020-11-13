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

            //Define your own permissions here. Example:
            //myGroup.AddPermission(AngularMaterialPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AngularMaterialResource>(name);
        }
    }
}
