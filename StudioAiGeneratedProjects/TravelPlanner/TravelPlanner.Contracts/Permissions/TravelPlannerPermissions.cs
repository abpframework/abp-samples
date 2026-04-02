namespace TravelPlanner.Permissions;

public static class TravelPlannerPermissions
{
    public const string GroupName = "TravelPlanner";

    public static class Travels
    {
        public const string Default = GroupName + ".Travels";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
