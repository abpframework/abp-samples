using FileActionsDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FileActionsDemo.Permissions
{
    public class FileActionsDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(FileActionsDemoPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(FileActionsDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<FileActionsDemoResource>(name);
        }
    }
}
