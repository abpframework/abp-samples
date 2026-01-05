using aspnet.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace aspnet.Permissions;

public class aspnetPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(aspnetPermissions.GroupName);


        myGroup.AddPermission(aspnetPermissions.Dashboard.Host, L("Permission:Dashboard"), MultiTenancySides.Host);


        //Define your own permissions here. Example:
        //myGroup.AddPermission(aspnetPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<aspnetResource>(name);
    }
}
