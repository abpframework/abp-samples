using TaskAndCommentBoard.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace TaskAndCommentBoard.Permissions;

public class TaskAndCommentBoardPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TaskAndCommentBoardPermissions.GroupName);


        var booksPermission = myGroup.AddPermission(TaskAndCommentBoardPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(TaskAndCommentBoardPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(TaskAndCommentBoardPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(TaskAndCommentBoardPermissions.Books.Delete, L("Permission:Books.Delete"));
        
        //Define your own permissions here. Example:
        //myGroup.AddPermission(TaskAndCommentBoardPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TaskAndCommentBoardResource>(name);
    }
}
