using SignalRDemoBlazorUi.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SignalRDemoBlazorUi.Permissions;

public class SignalRDemoBlazorUiPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(SignalRDemoBlazorUiPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(SignalRDemoBlazorUiPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SignalRDemoBlazorUiResource>(name);
    }
}
