using Acme.ModuleA.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Acme.ModuleA.Permissions;

public class ModuleAPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ModuleAPermissions.GroupName, L("Permission:ModuleA"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ModuleAResource>(name);
    }
}
