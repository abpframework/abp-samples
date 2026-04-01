namespace BillMaster.Permissions;

public static class BillMasterPermissions
{
    public const string GroupName = "BillMaster";


    public static class Books
    {
        public const string Default = GroupName + ".Books";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Invoices
    {
        public const string Default = GroupName + ".Invoices";
    }

    public static class Customers
    {
        public const string Default = Invoices.Default + ".Customers";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class Invoice
    {
        public const string Default = Invoices.Default + ".Invoice";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }

    public static class InvoiceItems
    {
        public const string Default = Invoices.Default + ".InvoiceItems";
        public const string Create = Default + ".Create";
        public const string Edit = Default + ".Edit";
        public const string Delete = Default + ".Delete";
    }
    
    //Add your own permission names. Example:
    //public const string MyPermission1 = GroupName + ".MyPermission1";
}
