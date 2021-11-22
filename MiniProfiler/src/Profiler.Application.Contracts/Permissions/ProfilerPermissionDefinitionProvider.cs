using Profiler.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Profiler.Permissions
{
    public class ProfilerPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(ProfilerPermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(ProfilerPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ProfilerResource>(name);
        }
    }
}
