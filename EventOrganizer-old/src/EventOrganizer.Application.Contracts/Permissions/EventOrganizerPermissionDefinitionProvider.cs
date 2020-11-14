using EventOrganizer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EventOrganizer.Permissions
{
    public class EventOrganizerPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(EventOrganizerPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(EventOrganizerPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<EventOrganizerResource>(name);
        }
    }
}
