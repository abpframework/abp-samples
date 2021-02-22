using MatBlazorSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace MatBlazorSample.Permissions
{
    public class MatBlazorSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(MatBlazorSamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(MatBlazorSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<MatBlazorSampleResource>(name);
        }
    }
}
