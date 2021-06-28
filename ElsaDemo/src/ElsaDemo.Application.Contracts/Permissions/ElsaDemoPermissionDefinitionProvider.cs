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

            myGroup.AddPermission(ElsaDemoPermissions.ElsaDashboard, L("Permission:ElsaDashboard"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ElsaDemoResource>(name);
        }
    }
}
