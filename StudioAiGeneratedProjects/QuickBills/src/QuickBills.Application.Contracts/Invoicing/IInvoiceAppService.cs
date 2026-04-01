using System.Threading.Tasks;
using QuickBills.Dtos.Invoicing;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace QuickBills.Invoicing;

/// <summary>
/// Application service interface for invoice management.
/// </summary>
public interface IInvoiceAppService : IApplicationService
{
    Task<PagedResultDto<InvoiceDto>> GetListAsync(GetInvoiceListInput input);
    Task<InvoiceDto> GetAsync(Guid id);
    Task<InvoiceWithDetailsDto> GetWithDetailsAsync(Guid id);
    Task<InvoiceDto> CreateAsync(CreateUpdateInvoiceDto input);
    Task<InvoiceDto> UpdateAsync(Guid id, CreateUpdateInvoiceDto input);
    Task DeleteAsync(Guid id);
    Task<InvoiceItemDto> AddItemAsync(Guid invoiceId, CreateUpdateInvoiceItemDto input);
    Task<InvoiceItemDto> UpdateItemAsync(Guid invoiceId, Guid itemId, CreateUpdateInvoiceItemDto input);
    Task RemoveItemAsync(Guid invoiceId, Guid itemId);
    Task<InvoiceDto> ChangeStatusAsync(Guid id, InvoiceStatus newStatus);
}
