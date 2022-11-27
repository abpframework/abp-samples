using EfCoreDiDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EfCoreDiDemo.Permissions;

public class EfCoreDiDemoPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(EfCoreDiDemoPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(EfCoreDiDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EfCoreDiDemoResource>(name);
    }
}
