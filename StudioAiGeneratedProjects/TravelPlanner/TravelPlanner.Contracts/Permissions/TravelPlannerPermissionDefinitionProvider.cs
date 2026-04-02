using TravelPlanner.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace TravelPlanner.Permissions;

public class TravelPlannerPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TravelPlannerPermissions.GroupName);

        var travelsPermission = myGroup.AddPermission(
            TravelPlannerPermissions.Travels.Default,
            L("Permission:Travels")
        );
        travelsPermission.AddChild(
            TravelPlannerPermissions.Travels.Create,
            L("Permission:Travels.Create")
        );
        travelsPermission.AddChild(
            TravelPlannerPermissions.Travels.Edit,
            L("Permission:Travels.Edit")
        );
        travelsPermission.AddChild(
            TravelPlannerPermissions.Travels.Delete,
            L("Permission:Travels.Delete")
        );
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TravelPlannerResource>(name);
    }
}
