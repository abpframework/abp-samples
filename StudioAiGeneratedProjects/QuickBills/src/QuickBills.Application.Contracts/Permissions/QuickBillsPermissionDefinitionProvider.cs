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

        // Customer permissions
        var customersPermission = myGroup.AddPermission(
            QuickBillsPermissions.Customers.Default,
            L("Permission:Customers"));
        customersPermission.AddChild(
            QuickBillsPermissions.Customers.Create,
            L("Permission:Create"));
        customersPermission.AddChild(
            QuickBillsPermissions.Customers.Edit,
            L("Permission:Edit"));
        customersPermission.AddChild(
            QuickBillsPermissions.Customers.Delete,
            L("Permission:Delete"));

        // Invoice permissions
        var invoicesPermission = myGroup.AddPermission(
            QuickBillsPermissions.Invoices.Default,
            L("Permission:Invoices"));
        invoicesPermission.AddChild(
            QuickBillsPermissions.Invoices.Create,
            L("Permission:Create"));
        invoicesPermission.AddChild(
            QuickBillsPermissions.Invoices.Edit,
            L("Permission:Edit"));
        invoicesPermission.AddChild(
            QuickBillsPermissions.Invoices.Delete,
            L("Permission:Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<QuickBillsResource>(name);
    }
}
