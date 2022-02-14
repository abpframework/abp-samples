using TelerikUIExample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TelerikUIExample.Permissions;

public class TelerikUIExamplePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TelerikUIExamplePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(TelerikUIExamplePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TelerikUIExampleResource>(name);
    }
}
