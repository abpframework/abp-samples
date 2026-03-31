using QuickBills.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace QuickBills.Permissions;

public class QuickBillsPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(QuickBillsPermissions.GroupName);

        //Define your own permissions here. Example:
        //myGroup.AddPermission(QuickBillsPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<QuickBillsResource>(name);
    }
}
