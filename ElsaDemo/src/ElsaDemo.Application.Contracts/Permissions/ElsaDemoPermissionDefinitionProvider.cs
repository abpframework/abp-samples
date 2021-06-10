using ElsaDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ElsaDemo.Permissions
{
    public class ElsaDemoPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ElsaDemoPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(ElsaDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ElsaDemoResource>(name);
        }
    }
}
