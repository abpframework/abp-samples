using SeparateBackgroundJob.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SeparateBackgroundJob.Permissions;

public class SeparateBackgroundJobPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(SeparateBackgroundJobPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(SeparateBackgroundJobPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SeparateBackgroundJobResource>(name);
    }
}
