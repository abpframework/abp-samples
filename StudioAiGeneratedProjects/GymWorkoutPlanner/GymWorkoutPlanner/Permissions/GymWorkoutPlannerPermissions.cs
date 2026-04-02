namespace GymWorkoutPlanner.Permissions;

public static class GymWorkoutPlannerPermissions
{
    public const string GroupName = "GymWorkoutPlanner";


    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Exercises
    {
        public const string Default = GroupName + ".Exercises";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class WorkoutPlans
    {
        public const string Default = GroupName + ".WorkoutPlans";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";
}
