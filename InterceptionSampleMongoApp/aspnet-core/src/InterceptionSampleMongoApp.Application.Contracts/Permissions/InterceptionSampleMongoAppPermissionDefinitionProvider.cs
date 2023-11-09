using InterceptionSampleMongoApp.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace InterceptionSampleMongoApp.Permissions;

public class InterceptionSampleMongoAppPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(InterceptionSampleMongoAppPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(InterceptionSampleMongoAppPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<InterceptionSampleMongoAppResource>(name);
    }
}
