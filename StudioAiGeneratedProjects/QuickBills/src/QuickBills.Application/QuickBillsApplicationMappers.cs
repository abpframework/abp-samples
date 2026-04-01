using Riok.Mapperly.Abstractions;
using QuickBills.Dtos.Invoicing;
using QuickBills.Invoicing;
using Volo.Abp.Mapperly;

namespace QuickBills;

[Mapper]
public partial class QuickBillsApplicationMappers
{
    // Customer mappings
    public partial CustomerDto Map(Customer source);
    public partial void Map(CreateUpdateCustomerDto source, Customer destination);

    // Invoice mappings
    public partial InvoiceDto Map(Invoice source);
    public partial void Map(CreateUpdateInvoiceDto source, Invoice destination);

    // InvoiceItem mappings
    public partial InvoiceItemDto Map(InvoiceItem source);
    public partial void Map(CreateUpdateInvoiceItemDto source, InvoiceItem destination);
}
