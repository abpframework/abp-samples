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

        var exercisesPermission = myGroup.AddPermission(GymWorkoutPlannerPermissions.Exercises.Default, L("Permission:Exercises"));
        exercisesPermission.AddChild(GymWorkoutPlannerPermissions.Exercises.Create, L("Permission:Exercises.Create"));
        exercisesPermission.AddChild(GymWorkoutPlannerPermissions.Exercises.Edit, L("Permission:Exercises.Edit"));
        exercisesPermission.AddChild(GymWorkoutPlannerPermissions.Exercises.Delete, L("Permission:Exercises.Delete"));

        var workoutPlansPermission = myGroup.AddPermission(GymWorkoutPlannerPermissions.WorkoutPlans.Default, L("Permission:WorkoutPlans"));
        workoutPlansPermission.AddChild(GymWorkoutPlannerPermissions.WorkoutPlans.Create, L("Permission:WorkoutPlans.Create"));
        workoutPlansPermission.AddChild(GymWorkoutPlannerPermissions.WorkoutPlans.Edit, L("Permission:WorkoutPlans.Edit"));
        workoutPlansPermission.AddChild(GymWorkoutPlannerPermissions.WorkoutPlans.Delete, L("Permission:WorkoutPlans.Delete"));

        //Define your own permissions here. Example:
        //myGroup.AddPermission(GymWorkoutPlannerPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<GymWorkoutPlannerResource>(name);
    }
}
