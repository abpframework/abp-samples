using AspirationalAbp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace AspirationalAbp.Permissions;

public class AspirationalAbpPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AspirationalAbpPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(AspirationalAbpPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AspirationalAbpResource>(name);
    }
}
