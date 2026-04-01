using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;
using BillMaster.Books;
using BillMaster.Invoices;

namespace BillMaster.Blazor;

[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBlazorMappers : MapperBase<BookDto, CreateUpdateBookDto>
{
    public override partial CreateUpdateBookDto Map(BookDto source);

    public override partial void Map(BookDto source, CreateUpdateBookDto destination);
}

// Customer Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBlazorCustomerMappers : MapperBase<CustomerDto, CreateUpdateCustomerDto>
{
    public override partial CreateUpdateCustomerDto Map(CustomerDto source);

    public override partial void Map(CustomerDto source, CreateUpdateCustomerDto destination);
}

// Invoice Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBlazorInvoiceMappers : MapperBase<InvoiceDto, CreateUpdateInvoiceDto>
{
    public override partial CreateUpdateInvoiceDto Map(InvoiceDto source);

    public override partial void Map(InvoiceDto source, CreateUpdateInvoiceDto destination);
}

// InvoiceItem Mappers
[Mapper(RequiredMappingStrategy = RequiredMappingStrategy.Target)]
public partial class BillMasterBlazorInvoiceItemMappers : MapperBase<InvoiceItemDto, CreateUpdateInvoiceItemDto>
{
    public override partial CreateUpdateInvoiceItemDto Map(InvoiceItemDto source);

    public override partial void Map(InvoiceItemDto source, CreateUpdateInvoiceItemDto destination);
}

