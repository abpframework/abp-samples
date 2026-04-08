namespace BookReviewTracker4.Permissions;

public static class BookReviewTracker4Permissions
{
    public const string GroupName = "BookReviewTracker4";

    public static class Authors
    {
        public const string Default = GroupName + ".Authors.Default";
        public const string Create = GroupName + ".Authors.Create";
        public const string Update = GroupName + ".Authors.Update";
        public const string Delete = GroupName + ".Authors.Delete";
    }

    public static class Books
    {
        public const string Default = GroupName + ".Books.Default";
        public const string Create = GroupName + ".Books.Create";
        public const string Update = GroupName + ".Books.Update";
        public const string Delete = GroupName + ".Books.Delete";
    }

    public static class Reviews
    {
        public const string Default = GroupName + ".Reviews.Default";
        public const string Create = GroupName + ".Reviews.Create";
        public const string Update = GroupName + ".Reviews.Update";
        public const string Delete = GroupName + ".Reviews.Delete";
    }
}
