using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using QuickBills.Dtos.Invoicing;
using QuickBills.Permissions;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;

namespace QuickBills.Invoicing;

/// <summary>
/// Application service for invoice management with CRUD operations and item management.
/// </summary>
[Authorize(QuickBillsPermissions.Invoices.Default)]
public class InvoiceAppService : QuickBillsAppService, IInvoiceAppService
{
    private readonly IRepository<Invoice, Guid> _invoiceRepository;
    private readonly IRepository<InvoiceItem, Guid> _invoiceItemRepository;
    private readonly IRepository<Customer, Guid> _customerRepository;
    private readonly Application.Invoicing.InvoicingMapper _invoicingMapper;

    public InvoiceAppService(
        IRepository<Invoice, Guid> invoiceRepository,
        IRepository<InvoiceItem, Guid> invoiceItemRepository,
        IRepository<Customer, Guid> customerRepository,
        Application.Invoicing.InvoicingMapper invoicingMapper)
    {
        _invoiceRepository = invoiceRepository;
        _invoiceItemRepository = invoiceItemRepository;
        _customerRepository = customerRepository;
        _invoicingMapper = invoicingMapper;
    }

    public async Task<PagedResultDto<InvoiceDto>> GetListAsync(GetInvoiceListInput input)
    {
        // Authorization check
        await AuthorizationService.CheckAsync(QuickBillsPermissions.Invoices.Default);

        var query = await _invoiceRepository.WithDetailsAsync(i => i.Customer);

        // Apply filters
        if (!input.Filter.IsNullOrWhiteSpace())
        {
            query = query.Where(i => 
                i.InvoiceNumber.Contains(input.Filter!) || 
                (i.Customer != null && i.Customer.Name.Contains(input.Filter!))
            );
        }

        if (input.CustomerId.HasValue)
        {
            query = query.Where(i => i.CustomerId == input.CustomerId.Value);
        }

        // Apply sorting
        if (!input.Sorting.IsNullOrWhiteSpace())
        {
            query = query.OrderBy(input.Sorting);
        }
        else
        {
            query = query.OrderBy(i => i.InvoiceNumber);
        }

        var totalCount = await AsyncExecuter.CountAsync(query);
        var items = await AsyncExecuter.ToListAsync(
            query.Skip(input.SkipCount).Take(input.MaxResultCount)
        );

        var dtos = items.Select(i => new InvoiceDto
        {
            Id = i.Id,
            CreationTime = i.CreationTime,
            CreatorId = i.CreatorId,
            LastModificationTime = i.LastModificationTime,
            LastModifierId = i.LastModifierId,
            CustomerId = i.CustomerId,
            InvoiceNumber = i.InvoiceNumber,
            IssuedDate = i.IssuedDate,
            DueDate = i.DueDate,
            Status = i.Status,
            Notes = i.Notes,
            Total = i.CalculateTotal(),
            CustomerName = i.Customer?.Name
        }).ToList();

        return new PagedResultDto<InvoiceDto>(totalCount, dtos);
    }

    public async Task<InvoiceDto> GetAsync(Guid id)
    {
        await AuthorizationService.CheckAsync(QuickBillsPermissions.Invoices.Default);

        var invoice = await _invoiceRepository.GetAsync(id);
        
        var dto = _invoicingMapper.MapInvoiceToDto(invoice);
        dto.Total = invoice.CalculateTotal();
        
        return dto;
    }

    public async Task<InvoiceWithDetailsDto> GetWithDetailsAsync(Guid id)
    {
        await AuthorizationService.CheckAsync(QuickBillsPermissions.Invoices.Default);

        var query = (await _invoiceRepository.WithDetailsAsync(i => i.Items, i => i.Customer))
            .Where(i => i.Id == id);

        var invoice = await AsyncExecuter.FirstOrDefaultAsync(query);
        
        if (invoice == null)
        {
            throw new BusinessException("Invoice not found!");
        }

        var dto = new InvoiceWithDetailsDto
        {
            Id = invoice.Id,
            CreationTime = invoice.CreationTime,
            CreatorId = invoice.CreatorId,
            LastModificationTime = invoice.LastModificationTime,
            LastModifierId = invoice.LastModifierId,
            CustomerId = invoice.CustomerId,
            InvoiceNumber = invoice.InvoiceNumber,
            IssuedDate = invoice.IssuedDate,
            DueDate = invoice.DueDate,
            Status = invoice.Status,
            Notes = invoice.Notes,
            Total = invoice.CalculateTotal(),
            CustomerName = invoice.Customer?.Name,
            Items = invoice.Items.Select(item => new InvoiceItemDto
            {
                Id = item.Id,
                InvoiceId = item.InvoiceId,
                Description = item.Description,
                Quantity = item.Quantity,
                UnitPrice = item.UnitPrice,
                LineTotal = item.LineTotal
            }).ToList()
        };

        return dto;
    }

    [Authorize(QuickBillsPermissions.Invoices.Create)]
    public async Task<InvoiceDto> CreateAsync(CreateUpdateInvoiceDto input)
    {
        // Validate customer exists
        var customer = await _customerRepository.GetAsync(input.CustomerId);
        if (customer == null)
        {
            throw new BusinessException("Customer not found!");
        }

        var invoice = new Invoice(
            Guid.NewGuid(),
            input.CustomerId,
            input.InvoiceNumber,
            input.IssuedDate,
            input.DueDate
        )
        {
            Status = input.Status,
            Notes = input.Notes
        };

        var createdInvoice = await _invoiceRepository.InsertAsync(invoice);

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(createdInvoice);
        dto.Total = createdInvoice.CalculateTotal();
        
        return dto;
    }

    [Authorize(QuickBillsPermissions.Invoices.Edit)]
    public async Task<InvoiceDto> UpdateAsync(Guid id, CreateUpdateInvoiceDto input)
    {
        var invoice = await _invoiceRepository.GetAsync(id);

        invoice.InvoiceNumber = input.InvoiceNumber;
        invoice.IssuedDate = input.IssuedDate;
        invoice.DueDate = input.DueDate;
        invoice.Status = input.Status;
        invoice.Notes = input.Notes;

        var updatedInvoice = await _invoiceRepository.UpdateAsync(invoice);

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(updatedInvoice);
        dto.Total = updatedInvoice.CalculateTotal();
        
        return dto;
    }

    [Authorize(QuickBillsPermissions.Invoices.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _invoiceRepository.DeleteAsync(id);
    }

    [Authorize(QuickBillsPermissions.Invoices.Edit)]
    public async Task<InvoiceItemDto> AddItemAsync(Guid invoiceId, CreateUpdateInvoiceItemDto input)
    {
        var invoice = await _invoiceRepository.GetAsync(invoiceId);

        invoice.AddItem(input.Description, input.Quantity, input.UnitPrice);

        await _invoiceRepository.UpdateAsync(invoice);

        var addedItem = invoice.Items.Last();

        return new InvoiceItemDto
        {
            Id = addedItem.Id,
            InvoiceId = addedItem.InvoiceId,
            Description = addedItem.Description,
            Quantity = addedItem.Quantity,
            UnitPrice = addedItem.UnitPrice,
            LineTotal = addedItem.LineTotal
        };
    }

    [Authorize(QuickBillsPermissions.Invoices.Edit)]
    public async Task<InvoiceItemDto> UpdateItemAsync(Guid invoiceId, Guid itemId, CreateUpdateInvoiceItemDto input)
    {
        var invoice = await _invoiceRepository.GetAsync(invoiceId);
        var item = invoice.Items.FirstOrDefault(i => i.Id == itemId);

        if (item == null)
        {
            throw new BusinessException("Invoice item not found!");
        }

        item.Description = input.Description;
        item.Quantity = input.Quantity;
        item.UnitPrice = input.UnitPrice;

        await _invoiceRepository.UpdateAsync(invoice);

        return new InvoiceItemDto
        {
            Id = item.Id,
            InvoiceId = item.InvoiceId,
            Description = item.Description,
            Quantity = item.Quantity,
            UnitPrice = item.UnitPrice,
            LineTotal = item.LineTotal
        };
    }

    [Authorize(QuickBillsPermissions.Invoices.Edit)]
    public async Task RemoveItemAsync(Guid invoiceId, Guid itemId)
    {
        var invoice = await _invoiceRepository.GetAsync(invoiceId);
        invoice.RemoveItem(itemId);
        await _invoiceRepository.UpdateAsync(invoice);
    }

    [Authorize(QuickBillsPermissions.Invoices.Edit)]
    public async Task<InvoiceDto> ChangeStatusAsync(Guid id, InvoiceStatus newStatus)
    {
        var invoice = await _invoiceRepository.GetAsync(id);
        invoice.ChangeStatus(newStatus);

        var updatedInvoice = await _invoiceRepository.UpdateAsync(invoice);

        var dto = ObjectMapper.Map<Invoice, InvoiceDto>(updatedInvoice);
        dto.Total = updatedInvoice.CalculateTotal();
        
        return dto;
    }
}
