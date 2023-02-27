using OpenId2Ids.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace OpenId2Ids.Permissions;

public class OpenId2IdsPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(OpenId2IdsPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(OpenId2IdsPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<OpenId2IdsResource>(name);
    }
}
