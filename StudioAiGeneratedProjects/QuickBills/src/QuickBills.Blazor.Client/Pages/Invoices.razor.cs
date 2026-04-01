using QuickBills.Dtos.Invoicing;
using QuickBills.Invoicing;
using QuickBills.Permissions;
using Volo.Abp.Application.Dtos;

namespace QuickBills.Blazor.Client.Pages;

public partial class Invoices
{
    private IList<InvoiceDto> InvoiceList = new List<InvoiceDto>();
    private IList<CustomerDto> CustomerList = new List<CustomerDto>();
    private int PageSize { get; } = 10;
    private int CurrentPage { get; set; } = 0;
    private int TotalCount { get; set; }
    private string FilterText { get; set; } = string.Empty;
    private Guid? SelectedCustomerId { get; set; }
    private bool Loading { get; set; }
    private bool IsEditMode { get; set; }
    private Guid EditingInvoiceId { get; set; }
    private CreateUpdateInvoiceDto NewInvoice { get; set; } = new();

    private bool HasCreatePermission { get; set; }
    private bool HasEditPermission { get; set; }
    private bool HasDeletePermission { get; set; }

    public IList<InvoiceDto> InvoiceRows => InvoiceList;
    public IList<CustomerDto> Customers => CustomerList;

    public int PageCount => (TotalCount + PageSize - 1) / PageSize;

    protected override async Task OnInitializedAsync()
    {
        await CheckPermissionsAsync();
        await LoadCustomersAsync();
        await GetInvoicesAsync();
    }

    private Task CheckPermissionsAsync()
    {
        HasCreatePermission = true;
        HasEditPermission = true;
        HasDeletePermission = true;
        return Task.CompletedTask;
    }

    private async Task LoadCustomersAsync()
    {
        try
        {
            var result = await CustomerAppService.GetListAsync(new GetCustomerListInput
            {
                SkipCount = 0,
                MaxResultCount = 1000
            });
            CustomerList = result.Items.ToList();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    private async Task GetInvoicesAsync()
    {
        Loading = true;
        try
        {
            var result = await InvoiceAppService.GetListAsync(new GetInvoiceListInput
            {
                Filter = FilterText,
                CustomerId = SelectedCustomerId,
                SkipCount = CurrentPage * PageSize,
                MaxResultCount = PageSize,
                Sorting = "invoiceNumber"
            });

            InvoiceList = result.Items.ToList();
            TotalCount = (int)result.TotalCount;
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
        finally
        {
            Loading = false;
        }
    }

    private async Task OnSearchKeyUp(KeyboardEventArgs _)
    {
        CurrentPage = 0;
        await GetInvoicesAsync();
    }

    private async Task OnCustomerChanged(ChangeEventArgs e)
    {
        var raw = e.Value?.ToString();
        SelectedCustomerId = Guid.TryParse(raw, out var customerId) ? customerId : null;
        CurrentPage = 0;
        await GetInvoicesAsync();
    }

    private async Task OpenCreateInvoiceModal()
    {
        IsEditMode = false;
        NewInvoice = new CreateUpdateInvoiceDto
        {
            IssuedDate = DateTime.Today,
            DueDate = DateTime.Today.AddDays(30),
            Status = InvoiceStatus.Draft
        };
        await ShowModalAsync("invoiceModal");
    }

    private async Task OpenEditInvoiceModal(InvoiceDto invoice)
    {
        IsEditMode = true;
        EditingInvoiceId = invoice.Id;
        NewInvoice = new CreateUpdateInvoiceDto
        {
            CustomerId = invoice.CustomerId,
            InvoiceNumber = invoice.InvoiceNumber,
            IssuedDate = invoice.IssuedDate,
            DueDate = invoice.DueDate,
            Status = invoice.Status,
            Notes = invoice.Notes
        };
        await ShowModalAsync("invoiceModal");
    }

    private async Task SaveInvoice()
    {
        try
        {
            if (IsEditMode)
            {
                await InvoiceAppService.UpdateAsync(EditingInvoiceId, NewInvoice);
            }
            else
            {
                await InvoiceAppService.CreateAsync(NewInvoice);
            }

            await HideModalAsync("invoiceModal");
            await GetInvoicesAsync();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    private void ViewInvoice(Guid id)
    {
        NavigationManager.NavigateTo($"/invoice-details/{id}");
    }

    private async Task DeleteInvoice(Guid id)
    {
        if (await JSRuntime.InvokeAsync<bool>("confirm", L["DeleteConfirmation"]))
        {
            try
            {
                await InvoiceAppService.DeleteAsync(id);
                await GetInvoicesAsync();
            }
            catch (Exception ex)
            {
                await HandleErrorAsync(ex);
            }
        }
    }

    private async Task PreviousPage()
    {
        if (CurrentPage > 0)
        {
            CurrentPage--;
            await GetInvoicesAsync();
        }
    }

    private async Task NextPage()
    {
        if (CurrentPage < PageCount - 1)
        {
            CurrentPage++;
            await GetInvoicesAsync();
        }
    }

    private async Task GoToPage(int page)
    {
        CurrentPage = page;
        await GetInvoicesAsync();
    }

    private string GetStatusClass(InvoiceStatus status)
    {
        return status switch
        {
            InvoiceStatus.Draft => "bg-secondary",
            InvoiceStatus.Sent => "bg-info",
            InvoiceStatus.Paid => "bg-success",
            InvoiceStatus.Cancelled => "bg-danger",
            _ => "bg-secondary"
        };
    }

    private async Task ShowModalAsync(string modalId)
    {
        await JSRuntime.InvokeVoidAsync("eval", $"document.getElementById('{modalId}').classList.add('show'); document.getElementById('{modalId}').style.display = 'block'; document.body.classList.add('modal-open');");
    }

    private async Task HideModalAsync(string modalId)
    {
        await JSRuntime.InvokeVoidAsync("eval", $"document.getElementById('{modalId}').classList.remove('show'); document.getElementById('{modalId}').style.display = 'none'; document.body.classList.remove('modal-open');");
    }
}
