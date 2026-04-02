using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using TravelPlanner.Services.Discovery;

namespace TravelPlanner.Pages;

public partial class DiscoveryDetail
{
    [Parameter] public string Xid { get; set; } = string.Empty;

    [Inject] private NavigationManager NavigationManager { get; set; } = default!;

    private DiscoveryLocationDto? Location { get; set; }
    private bool IsLoading { get; set; } = true;

    protected override async Task OnInitializedAsync()
    {
        await LoadLocationAsync();
    }

    protected override async Task OnParametersSetAsync()
    {
        await LoadLocationAsync();
    }

    private async Task LoadLocationAsync()
    {
        if (string.IsNullOrWhiteSpace(Xid)) return;

        IsLoading = true;
        try
        {
            Location = await DiscoveryAppService.GetLocationDetailAsync(Xid);
        }
        catch (Exception ex)
        {
            await Message.Error(ex.Message);
            Location = null;
        }
        finally
        {
            IsLoading = false;
        }
    }

    private void GoBack()
    {
        NavigationManager.NavigateTo("/discovery");
    }
}
