using QuickBills.Dtos.Invoicing;
using QuickBills.Invoicing;
using QuickBills.Permissions;
using Volo.Abp.Application.Dtos;

namespace QuickBills.Blazor.Client.Pages;

public partial class Customers
{
    private IList<CustomerDto> CustomerList = new List<CustomerDto>();
    private int PageSize { get; } = 10;
    private int CurrentPage { get; set; } = 0;
    private int TotalCount { get; set; }
    private string FilterText { get; set; } = string.Empty;
    private bool Loading { get; set; }
    private bool IsEditMode { get; set; }
    private Guid EditingCustomerId { get; set; }
    private CreateUpdateCustomerDto NewCustomer { get; set; } = new();

    private bool HasCreatePermission { get; set; }
    private bool HasEditPermission { get; set; }
    private bool HasDeletePermission { get; set; }

    public IList<CustomerDto> CustomerRows => CustomerList;

    public int PageCount => (TotalCount + PageSize - 1) / PageSize;

    protected override async Task OnInitializedAsync()
    {
        await CheckPermissionsAsync();
        await GetCustomersAsync();
    }

    private Task CheckPermissionsAsync()
    {
        HasCreatePermission = true;
        HasEditPermission = true;
        HasDeletePermission = true;
        return Task.CompletedTask;
    }

    private async Task GetCustomersAsync()
    {
        Loading = true;
        try
        {
            var result = await CustomerAppService.GetListAsync(new GetCustomerListInput
            {
                Filter = FilterText,
                SkipCount = CurrentPage * PageSize,
                MaxResultCount = PageSize,
                Sorting = "name"
            });

            CustomerList = result.Items.ToList();
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

    private async Task OnFilterTextChanged(KeyboardEventArgs args)
    {
        CurrentPage = 0;
        await GetCustomersAsync();
    }

    private async Task OpenCreateCustomerModal()
    {
        IsEditMode = false;
        NewCustomer = new CreateUpdateCustomerDto();
        await ShowModalAsync("customerModal");
    }

    private async Task OpenEditCustomerModal(CustomerDto customer)
    {
        IsEditMode = true;
        EditingCustomerId = customer.Id;
        NewCustomer = new CreateUpdateCustomerDto
        {
            Name = customer.Name,
            Email = customer.Email,
            Phone = customer.Phone,
            Address = customer.Address,
            City = customer.City,
            Country = customer.Country
        };
        await ShowModalAsync("customerModal");
    }

    private async Task SaveCustomer()
    {
        try
        {
            if (IsEditMode)
            {
                await CustomerAppService.UpdateAsync(EditingCustomerId, NewCustomer);
            }
            else
            {
                await CustomerAppService.CreateAsync(NewCustomer);
            }

            await HideModalAsync("customerModal");
            await GetCustomersAsync();
        }
        catch (Exception ex)
        {
            await HandleErrorAsync(ex);
        }
    }

    private async Task DeleteCustomer(Guid id)
    {
        if (await JSRuntime.InvokeAsync<bool>("confirm", L["DeleteConfirmation"]))
        {
            try
            {
                await CustomerAppService.DeleteAsync(id);
                await GetCustomersAsync();
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
            await GetCustomersAsync();
        }
    }

    private async Task NextPage()
    {
        if (CurrentPage < PageCount - 1)
        {
            CurrentPage++;
            await GetCustomersAsync();
        }
    }

    private async Task GoToPage(int page)
    {
        CurrentPage = page;
        await GetCustomersAsync();
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
