using QuickBills.Dtos.Invoicing;
using QuickBills.Invoicing;
using QuickBills.Permissions;

namespace QuickBills.Blazor.Client.Pages;

public partial class InvoiceDetails
{
    [Parameter]
    public Guid InvoiceId { get; set; }

    private InvoiceWithDetailsDto Invoice { get; set; } = new();
    private bool Loading { get; set; }
    private bool IsEditingItem { get; set; }
    private Guid EditingItemId { get; set; }
    private CreateUpdateInvoiceItemDto NewItem { get; set; } = new();
    private InvoiceStatus SelectedStatus { get; set; }

    private bool HasEditPermission { get; set; }
    private bool HasDeletePermission { get; set; }

    protected override async Task OnInitializedAsync()
    {
        await CheckPermissionsAsync();
        await LoadInvoiceAsync();
    }

    private Task CheckPermissionsAsync()
    {
        HasEditPermission = true;
        HasDeletePermission = true;
        return Task.CompletedTask;
    }

    private async Task LoadInvoiceAsync()
    {
        Loading = true;
        try
        {
            Invoice = await InvoiceAppService.GetWithDetailsAsync(InvoiceId);
            SelectedStatus = Invoice.Status;
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

    private async Task OpenAddItemModal()
    {
        IsEditingItem = false;
        NewItem = new CreateUpdateInvoiceItemDto();
        await ShowModalAsync("itemModal");
    }

    private async Task OpenEditItemModal(InvoiceItemDto item)
    {
        IsEditingItem = true;
        EditingItemId = item.Id;
        NewItem = new CreateUpdateInvoiceItemDto
        {
            Description = item.Description,
            Quantity = item.Quantity,
            UnitPrice = item.UnitPrice
        };
        await ShowModalAsync("itemModal");
    }

    private async Task SaveItem()
    {
        try
        {
            if (IsEditingItem)
            {
                await InvoiceAppService.UpdateItemAsync(InvoiceId, EditingItemId, NewItem);
            }
            else
            {
                await InvoiceAppService.AddItemAsync(InvoiceId, NewItem);
            }

            await HideModalAsync("itemModal");
            await LoadInvoiceAsync();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    private async Task RemoveItem(Guid itemId)
    {
        if (await JSRuntime.InvokeAsync<bool>("confirm", L["DeleteConfirmation"]))
        {
            try
            {
                await InvoiceAppService.RemoveItemAsync(InvoiceId, itemId);
                await LoadInvoiceAsync();
            }
            catch (Exception ex)
            {
                await HandleErrorAsync(ex);
            }
        }
    }

    private async Task OpenStatusModal()
    {
        await ShowModalAsync("statusModal");
    }

    private async Task ChangeStatus()
    {
        try
        {
            await InvoiceAppService.ChangeStatusAsync(InvoiceId, SelectedStatus);
            await HideModalAsync("statusModal");
            await LoadInvoiceAsync();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    private async Task DeleteInvoice()
    {
        if (await JSRuntime.InvokeAsync<bool>("confirm", L["DeleteConfirmation"]))
        {
            try
            {
                await InvoiceAppService.DeleteAsync(InvoiceId);
                NavigationManager.NavigateTo("/invoices");
            }
            catch (Exception ex)
            {
                await HandleErrorAsync(ex);
            }
        }
    }

    private void OpenEditInvoiceModal()
    {
        NavigationManager.NavigateTo($"/invoices");
    }

    private void GoBackToInvoices()
    {
        NavigationManager.NavigateTo("/invoices");
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
