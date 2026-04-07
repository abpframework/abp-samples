using BookReviewTracker4.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace BookReviewTracker4.Permissions;

public class BookReviewTracker4PermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(BookReviewTracker4Permissions.GroupName, L("Permission:BookReviewTracker4"));

        // Authors permissions
        var authorsPermission = myGroup.AddPermission(
            BookReviewTracker4Permissions.Authors.Default,
            L("Permission:Authors.Default"),
            MultiTenancySides.Both);

        authorsPermission.AddChild(
            BookReviewTracker4Permissions.Authors.Create,
            L("Permission:Authors.Create"));

        authorsPermission.AddChild(
            BookReviewTracker4Permissions.Authors.Update,
            L("Permission:Authors.Update"));

        authorsPermission.AddChild(
            BookReviewTracker4Permissions.Authors.Delete,
            L("Permission:Authors.Delete"));

        // Books permissions
        var booksPermission = myGroup.AddPermission(
            BookReviewTracker4Permissions.Books.Default,
            L("Permission:Books.Default"),
            MultiTenancySides.Both);

        booksPermission.AddChild(
            BookReviewTracker4Permissions.Books.Create,
            L("Permission:Books.Create"));

        booksPermission.AddChild(
            BookReviewTracker4Permissions.Books.Update,
            L("Permission:Books.Update"));

        booksPermission.AddChild(
            BookReviewTracker4Permissions.Books.Delete,
            L("Permission:Books.Delete"));

        // Reviews permissions
        var reviewsPermission = myGroup.AddPermission(
            BookReviewTracker4Permissions.Reviews.Default,
            L("Permission:Reviews.Default"),
            MultiTenancySides.Both);

        reviewsPermission.AddChild(
            BookReviewTracker4Permissions.Reviews.Create,
            L("Permission:Reviews.Create"));

        reviewsPermission.AddChild(
            BookReviewTracker4Permissions.Reviews.Update,
            L("Permission:Reviews.Update"));

        reviewsPermission.AddChild(
            BookReviewTracker4Permissions.Reviews.Delete,
            L("Permission:Reviews.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BookReviewTracker4Resource>(name);
    }
}
