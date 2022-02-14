using TelerikBlazorSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TelerikBlazorSample.Permissions;

public class TelerikBlazorSamplePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TelerikBlazorSamplePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(TelerikBlazorSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TelerikBlazorSampleResource>(name);
    }
}
