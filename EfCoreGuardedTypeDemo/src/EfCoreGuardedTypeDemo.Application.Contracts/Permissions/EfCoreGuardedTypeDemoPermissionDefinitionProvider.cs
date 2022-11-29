using EfCoreGuardedTypeDemo.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EfCoreGuardedTypeDemo.Permissions;

public class EfCoreGuardedTypeDemoPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(EfCoreGuardedTypeDemoPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(EfCoreGuardedTypeDemoPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<EfCoreGuardedTypeDemoResource>(name);
    }
}
