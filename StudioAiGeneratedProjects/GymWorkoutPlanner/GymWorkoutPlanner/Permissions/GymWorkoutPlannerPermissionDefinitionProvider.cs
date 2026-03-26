using GymWorkoutPlanner.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace GymWorkoutPlanner.Permissions;

public class GymWorkoutPlannerPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(GymWorkoutPlannerPermissions.GroupName);


        var booksPermission = myGroup.AddPermission(GymWorkoutPlannerPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(GymWorkoutPlannerPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(GymWorkoutPlannerPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(GymWorkoutPlannerPermissions.Books.Delete, L("Permission:Books.Delete"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(GymWorkoutPlannerPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<GymWorkoutPlannerResource>(name);
    }
}
