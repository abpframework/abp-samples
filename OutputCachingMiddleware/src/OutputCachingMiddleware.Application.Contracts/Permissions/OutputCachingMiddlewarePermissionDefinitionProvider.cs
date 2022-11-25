using OutputCachingMiddleware.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace OutputCachingMiddleware.Permissions;

public class OutputCachingMiddlewarePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(OutputCachingMiddlewarePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(OutputCachingMiddlewarePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<OutputCachingMiddlewareResource>(name);
    }
}
