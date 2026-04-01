using System.Collections.Generic;
using System.Linq;
using Riok.Mapperly.Abstractions;
using QuickBills.Dtos.Invoicing;
using QuickBills.Invoicing;
using Volo.Abp.ObjectMapping;

namespace QuickBills.Application.Invoicing;

/// <summary>
/// Mapperly mapper for invoicing entities and DTOs.
/// Handles all entity-to-DTO and DTO-to-entity conversions.
/// </summary>
[Mapper(UseDeepCloning = false, EnumMappingStrategy = EnumMappingStrategy.ByValue)]
public partial class InvoicingMapper
{
    // Customer mappings
    [MapperIgnoreSource(nameof(Customer.Invoices))]
    [MapperIgnoreSource(nameof(Customer.ExtraProperties))]
    [MapperIgnoreSource(nameof(Customer.ConcurrencyStamp))]
    [MapperIgnoreSource(nameof(Customer.Id))]
    [MapperIgnoreSource(nameof(Customer.CreationTime))]
    [MapperIgnoreSource(nameof(Customer.CreatorId))]
    [MapperIgnoreSource(nameof(Customer.LastModificationTime))]
    [MapperIgnoreSource(nameof(Customer.LastModifierId))]
    public partial CustomerDto MapCustomerToDto(Customer customer);

    [MapperIgnoreTarget(nameof(Customer.Invoices))]
    [MapperIgnoreTarget(nameof(Customer.ExtraProperties))]
    [MapperIgnoreTarget(nameof(Customer.ConcurrencyStamp))]
    [MapperIgnoreTarget(nameof(Customer.CreationTime))]
    [MapperIgnoreTarget(nameof(Customer.CreatorId))]
    [MapperIgnoreTarget(nameof(Customer.LastModificationTime))]
    [MapperIgnoreTarget(nameof(Customer.LastModifierId))]
    public partial Customer MapCustomerFromDto(CreateUpdateCustomerDto dto);

    // Invoice mappings
    [MapperIgnoreSource(nameof(Invoice.Items))]
    [MapperIgnoreSource(nameof(Invoice.Customer))]
    [MapperIgnoreSource(nameof(Invoice.ExtraProperties))]
    [MapperIgnoreSource(nameof(Invoice.ConcurrencyStamp))]
    [MapperIgnoreSource(nameof(Invoice.Id))]
    [MapperIgnoreSource(nameof(Invoice.CreationTime))]
    [MapperIgnoreSource(nameof(Invoice.CreatorId))]
    [MapperIgnoreSource(nameof(Invoice.LastModificationTime))]
    [MapperIgnoreSource(nameof(Invoice.LastModifierId))]
    public partial InvoiceDto MapInvoiceToDto(Invoice invoice);

    [MapperIgnoreTarget(nameof(Invoice.Items))]
    [MapperIgnoreTarget(nameof(Invoice.Customer))]
    [MapperIgnoreTarget(nameof(Invoice.ExtraProperties))]
    [MapperIgnoreTarget(nameof(Invoice.ConcurrencyStamp))]
    [MapperIgnoreTarget(nameof(Invoice.CreationTime))]
    [MapperIgnoreTarget(nameof(Invoice.CreatorId))]
    [MapperIgnoreTarget(nameof(Invoice.LastModificationTime))]
    [MapperIgnoreTarget(nameof(Invoice.LastModifierId))]
    public partial Invoice MapInvoiceFromDto(CreateUpdateInvoiceDto dto);

    // InvoiceItem mappings (InvoiceItem is Entity<Guid>, not FullAuditedEntity, so no audit fields)
    public partial InvoiceItemDto MapInvoiceItemToDto(InvoiceItem item);

    public partial InvoiceItem MapInvoiceItemFromDto(CreateUpdateInvoiceItemDto dto);

    // List mappings
    public IReadOnlyList<CustomerDto> MapCustomersToDto(IReadOnlyList<Customer> customers)
        => customers.Select(MapCustomerToDto).ToList();

    public IReadOnlyList<InvoiceDto> MapInvoicesToDto(IReadOnlyList<Invoice> invoices)
        => invoices.Select(MapInvoiceToDto).ToList();

    public IReadOnlyList<InvoiceItemDto> MapInvoiceItemsToDto(IReadOnlyList<InvoiceItem> items)
        => items.Select(MapInvoiceItemToDto).ToList();
}
