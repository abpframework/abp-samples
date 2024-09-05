using Acme.DemoCenterApp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace Acme.DemoCenterApp.Permissions;

public class DemoCenterAppPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(DemoCenterAppPermissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(DemoCenterAppPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<DemoCenterAppResource>(name);
    }
}
