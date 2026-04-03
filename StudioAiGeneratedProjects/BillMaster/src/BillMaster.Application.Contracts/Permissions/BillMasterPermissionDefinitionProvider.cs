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

        // Invoices permissions
        var invoicesGroup = myGroup.AddPermission(BillMasterPermissions.Invoices.Default, L("Permission:Invoices"));

        // Customers permissions
        var customersPermission = invoicesGroup.AddChild(BillMasterPermissions.Customers.Default, L("Permission:Customers"));
        customersPermission.AddChild(BillMasterPermissions.Customers.Create, L("Permission:Customers.Create"));
        customersPermission.AddChild(BillMasterPermissions.Customers.Edit, L("Permission:Customers.Edit"));
        customersPermission.AddChild(BillMasterPermissions.Customers.Delete, L("Permission:Customers.Delete"));

        // Invoices feature permissions
        var invoicePermission = invoicesGroup.AddChild(BillMasterPermissions.Invoice.Default, L("Permission:Invoice"));
        invoicePermission.AddChild(BillMasterPermissions.Invoice.Create, L("Permission:Invoice.Create"));
        invoicePermission.AddChild(BillMasterPermissions.Invoice.Edit, L("Permission:Invoice.Edit"));
        invoicePermission.AddChild(BillMasterPermissions.Invoice.Delete, L("Permission:Invoice.Delete"));

        // InvoiceItems permissions
        var itemsPermission = invoicesGroup.AddChild(BillMasterPermissions.InvoiceItems.Default, L("Permission:InvoiceItems"));
        itemsPermission.AddChild(BillMasterPermissions.InvoiceItems.Create, L("Permission:InvoiceItems.Create"));
        itemsPermission.AddChild(BillMasterPermissions.InvoiceItems.Edit, L("Permission:InvoiceItems.Edit"));
        itemsPermission.AddChild(BillMasterPermissions.InvoiceItems.Delete, L("Permission:InvoiceItems.Delete"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<BillMasterResource>(name);
    }
}
