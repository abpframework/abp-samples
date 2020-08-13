using DevExtreme.Sample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DevExtreme.Sample.Permissions
{
    public class SamplePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(SamplePermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(SamplePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SampleResource>(name);
        }
    }
}
