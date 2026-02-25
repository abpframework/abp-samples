using NG.ModularCRM.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace NG.ModularCRM.Permissions;

public class ModularCRMPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ModularCRMPermissions.GroupName);



        //Define your own permissions here. Example:
        //myGroup.AddPermission(ModularCRMPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ModularCRMResource>(name);
    }
}
