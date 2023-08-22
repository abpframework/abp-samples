using SwaggerDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SwaggerDemo.Permissions;

public class SwaggerDemoPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(SwaggerDemoPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(SwaggerDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SwaggerDemoResource>(name);
    }
}
