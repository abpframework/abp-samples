using ModularCrm.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace ModularCrm.Permissions;

public class ModularCrmPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ModularCrmPermissions.GroupName);


        
        //Define your own permissions here. Example:
        //myGroup.AddPermission(ModularCrmPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ModularCrmResource>(name);
    }
}
