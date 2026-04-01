using System;
using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using BillMaster.Books;
using BillMaster.Invoices;

namespace BillMaster;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBookToBookDtoMapper : MapperBase<Book, BookDto>
{
    public override partial BookDto Map(Book source);

    public override partial void Map(Book source, BookDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCreateUpdateBookDtoToBookMapper : MapperBase<CreateUpdateBookDto, Book>
{
    public override partial Book Map(CreateUpdateBookDto source);

    public override partial void Map(CreateUpdateBookDto source, Book destination);
}

// Customer Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCustomerToCustomerDtoMapper : MapperBase<Customer, CustomerDto>
{
    public override partial CustomerDto Map(Customer source);

    public override partial void Map(Customer source, CustomerDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCreateUpdateCustomerDtoToCustomerMapper : MapperBase<CreateUpdateCustomerDto, Customer>
{
    public override Customer Map(CreateUpdateCustomerDto source)
    {
        return new Customer(source.Name, source.Email, source.Phone);
    }

    public override void Map(CreateUpdateCustomerDto source, Customer destination)
    {
        destination.Update(source.Name, source.Email, source.Phone);
    }
}

// Invoice Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterInvoiceToInvoiceDtoMapper : MapperBase<Invoice, InvoiceDto>
{
    public override partial InvoiceDto Map(Invoice source);

    public override partial void Map(Invoice source, InvoiceDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCreateUpdateInvoiceDtoToInvoiceMapper : MapperBase<CreateUpdateInvoiceDto, Invoice>
{
    public override Invoice Map(CreateUpdateInvoiceDto source)
    {
        return new Invoice(source.Number, source.CustomerId, source.InvoiceDate, source.Status)
        {
            Notes = source.Notes
        };
    }

    public override void Map(CreateUpdateInvoiceDto source, Invoice destination)
    {
        destination.Update(source.Number, source.CustomerId, source.InvoiceDate, source.Status, source.Notes);
    }
}

// InvoiceItem Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterInvoiceItemToInvoiceItemDtoMapper : MapperBase<InvoiceItem, InvoiceItemDto>
{
    public override partial InvoiceItemDto Map(InvoiceItem source);

    public override partial void Map(InvoiceItem source, InvoiceItemDto destination);
}

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterCreateUpdateInvoiceItemDtoToInvoiceItemMapper : MapperBase<CreateUpdateInvoiceItemDto, InvoiceItem>
{
    public override InvoiceItem Map(CreateUpdateInvoiceItemDto source)
    {
        // Note: InvoiceId will be set by the AppService when creating items for an invoice
        return new InvoiceItem(source.Description, source.Quantity, source.UnitPrice, Guid.Empty);
    }

    public override void Map(CreateUpdateInvoiceItemDto source, InvoiceItem destination)
    {
        destination.Update(source.Description, source.Quantity, source.UnitPrice);
    }
}
