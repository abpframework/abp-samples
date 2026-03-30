namespace PersonalBudget.Permissions;

public static class PersonalBudgetPermissions
{
    public const string GroupName = "PersonalBudget";

    public static class Categories
    {
        public const string Default = GroupName + ".Categories";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Expenses
    {
        public const string Default = GroupName + ".Expenses";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
}
