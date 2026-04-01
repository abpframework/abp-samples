using BillMaster.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;
using Volo.Abp.MultiTenancy;

namespace BillMaster.Permissions;

public class BillMasterPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(BillMasterPermissions.GroupName);

        var booksPermission = myGroup.AddPermission(BillMasterPermissions.Books.Default, L("Permission:Books"));
        booksPermission.AddChild(BillMasterPermissions.Books.Create, L("Permission:Books.Create"));
        booksPermission.AddChild(BillMasterPermissions.Books.Edit, L("Permission:Books.Edit"));
        booksPermission.AddChild(BillMasterPermissions.Books.Delete, L("Permission:Books.Delete"));
        //Define your own permissions here. Example:
        //myGroup.AddPermission(BillMasterPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BillMasterResource>(name);
    }
}
