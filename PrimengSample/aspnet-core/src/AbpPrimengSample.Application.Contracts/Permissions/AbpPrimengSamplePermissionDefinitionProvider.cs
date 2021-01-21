using AbpPrimengSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AbpPrimengSample.Permissions
{
    public class AbpPrimengSamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(AbpPrimengSamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(AbpPrimengSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<AbpPrimengSampleResource>(name);
        }
    }
}
