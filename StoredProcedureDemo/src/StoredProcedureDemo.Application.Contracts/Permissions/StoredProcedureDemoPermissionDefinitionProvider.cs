using StoredProcedureDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace StoredProcedureDemo.Permissions
{
    public class StoredProcedureDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(StoredProcedureDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(StoredProcedureDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<StoredProcedureDemoResource>(name);
        }
    }
}
