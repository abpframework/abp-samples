using PlugInSample.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace PlugInSample.Permissions;

public class PlugInSamplePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(PlugInSamplePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(PlugInSamplePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<PlugInSampleResource>(name);
    }
}
