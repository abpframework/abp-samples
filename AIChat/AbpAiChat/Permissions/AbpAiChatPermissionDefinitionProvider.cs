using AbpAiChat.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace AbpAiChat.Permissions;

public class AbpAiChatPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(AbpAiChatPermissions.GroupName);



        //Define your own permissions here. Example:
        //myGroup.AddPermission(AbpAiChatPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<AbpAiChatResource>(name);
    }
}
