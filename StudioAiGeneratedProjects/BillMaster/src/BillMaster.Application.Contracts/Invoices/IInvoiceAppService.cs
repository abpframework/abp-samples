using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace BillMaster.Invoices;

public interface IInvoiceAppService :
    ICrudAppService<
        InvoiceDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateInvoiceDto>
{
    /// <summary>
    /// Get an invoice with its customer and all line items
    /// </summary>
    Task<InvoiceDto> GetWithItemsAsync(Guid invoiceId);

    /// <summary>
    /// Get all items for a specific invoice
    /// </summary>
    Task<List<InvoiceItemDto>> GetInvoiceItemsAsync(Guid invoiceId);
}
