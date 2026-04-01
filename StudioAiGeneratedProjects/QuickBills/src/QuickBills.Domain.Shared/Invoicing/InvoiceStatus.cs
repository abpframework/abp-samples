namespace QuickBills.Invoicing;

/// <summary>
/// Represents the status of an invoice in the system.
/// </summary>
public enum InvoiceStatus
{
    /// <summary>
    /// Invoice is in draft state, not yet sent to customer.
    /// </summary>
    Draft = 0,

    /// <summary>
    /// Invoice has been sent to the customer.
    /// </summary>
    Sent = 1,

    /// <summary>
    /// Invoice has been paid by the customer.
    /// </summary>
    Paid = 2,

    /// <summary>
    /// Invoice has been cancelled.
    /// </summary>
    Cancelled = 3
}
