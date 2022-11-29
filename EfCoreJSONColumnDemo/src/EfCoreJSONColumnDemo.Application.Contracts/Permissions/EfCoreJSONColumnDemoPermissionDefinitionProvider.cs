using EfCoreJSONColumnDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EfCoreJSONColumnDemo.Permissions;

public class EfCoreJSONColumnDemoPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(EfCoreJSONColumnDemoPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(EfCoreJSONColumnDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EfCoreJSONColumnDemoResource>(name);
    }
}
