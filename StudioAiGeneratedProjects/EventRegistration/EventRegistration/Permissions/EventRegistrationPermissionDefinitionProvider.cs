using EventRegistration.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace EventRegistration.Permissions;

public class EventRegistrationPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(EventRegistrationPermissions.GroupName, L("Permission:EventRegistration"));

        var eventsPermission = myGroup.AddPermission(EventRegistrationPermissions.Events.Default, L("Permission:Events"));
        eventsPermission.AddChild(EventRegistrationPermissions.Events.Create, L("Permission:Events.Create"));
        eventsPermission.AddChild(EventRegistrationPermissions.Events.Edit, L("Permission:Events.Edit"));
        eventsPermission.AddChild(EventRegistrationPermissions.Events.Delete, L("Permission:Events.Delete"));

        var attendeesPermission = eventsPermission.AddChild(EventRegistrationPermissions.Events.Attendees.Default, L("Permission:Events.Attendees"));
        attendeesPermission.AddChild(EventRegistrationPermissions.Events.Attendees.Create, L("Permission:Events.Attendees.Create"));
        attendeesPermission.AddChild(EventRegistrationPermissions.Events.Attendees.Edit, L("Permission:Events.Attendees.Edit"));
        attendeesPermission.AddChild(EventRegistrationPermissions.Events.Attendees.Delete, L("Permission:Events.Attendees.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EventRegistrationResource>(name);
    }
}
