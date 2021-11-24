using ProfilerTiered.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ProfilerTiered.Permissions
{
    public class ProfilerTieredPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ProfilerTieredPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(ProfilerTieredPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProfilerTieredResource>(name);
        }
    }
}
