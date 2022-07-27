using Ids2OpenId.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Ids2OpenId.Permissions;

public class Ids2OpenIdPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(Ids2OpenIdPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(Ids2OpenIdPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<Ids2OpenIdResource>(name);
    }
}
