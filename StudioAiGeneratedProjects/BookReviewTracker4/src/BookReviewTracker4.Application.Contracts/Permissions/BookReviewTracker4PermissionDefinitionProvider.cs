using BookReviewTracker4.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace BookReviewTracker4.Permissions;

public class BookReviewTracker4PermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(BookReviewTracker4Permissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(BookReviewTracker4Permissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BookReviewTracker4Resource>(name);
    }
}
