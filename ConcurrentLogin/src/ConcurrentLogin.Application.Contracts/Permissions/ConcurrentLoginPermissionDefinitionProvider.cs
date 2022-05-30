using ConcurrentLogin.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ConcurrentLogin.Permissions;

public class ConcurrentLoginPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ConcurrentLoginPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(ConcurrentLoginPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ConcurrentLoginResource>(name);
    }
}
