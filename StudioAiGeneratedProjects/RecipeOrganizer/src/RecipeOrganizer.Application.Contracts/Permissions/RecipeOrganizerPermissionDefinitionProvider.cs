using RecipeOrganizer.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace RecipeOrganizer.Permissions;

public class RecipeOrganizerPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(RecipeOrganizerPermissions.GroupName);

        var booksPermission = myGroup.AddPermission(RecipeOrganizerPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(RecipeOrganizerPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(RecipeOrganizerPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(RecipeOrganizerPermissions.Books.Delete, L("Permission:Books.Delete"));
        //Define your own permissions here. Example:
        //myGroup.AddPermission(RecipeOrganizerPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<RecipeOrganizerResource>(name);
    }
}
