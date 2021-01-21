using ExcelIO.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ExcelIO.Permissions
{
    public class ExcelIOPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ExcelIOPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ExcelIOPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ExcelIOResource>(name);
        }
    }
}
