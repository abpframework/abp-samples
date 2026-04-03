namespace EventRegistration.Permissions;

public static class EventRegistrationPermissions
{
    public const string GroupName = "EventRegistration";

    public static class Events
    {
        public const string Default = GroupName + ".Events";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";

        public static class Attendees
        {
            public const string Default = Events.Default + ".Attendees";
            public const string Create = Default + ".Create";
            public const string Edit = Default + ".Edit";
            public const string Delete = Default + ".Delete";
        }
    }
}
