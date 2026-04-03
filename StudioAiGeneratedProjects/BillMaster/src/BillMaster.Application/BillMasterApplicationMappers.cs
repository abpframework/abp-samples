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
    public override partial Customer Map(CreateUpdateCustomerDto source);

    public override partial void Map(CreateUpdateCustomerDto source, Customer destination);
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
    public override partial Invoice Map(CreateUpdateInvoiceDto source);

    public override partial void Map(CreateUpdateInvoiceDto source, Invoice destination);
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
    public override partial InvoiceItem Map(CreateUpdateInvoiceItemDto source);

    public override partial void Map(CreateUpdateInvoiceItemDto source, InvoiceItem destination);
}
