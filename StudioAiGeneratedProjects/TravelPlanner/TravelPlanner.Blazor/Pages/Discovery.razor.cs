using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using TravelPlanner.Services.Discovery;

namespace TravelPlanner.Pages;

public partial class Discovery
{
    [Inject] private NavigationManager NavigationManager { get; set; } = default!;

    private List<DiscoveryLocationDto> Locations { get; set; } = new();
    private bool IsLoading { get; set; } = true;
    private string SelectedCategory { get; set; } = "all";
    private string SearchKeyword { get; set; } = string.Empty;
    private int CurrentPage { get; set; } = 1;
    private int TotalCount { get; set; }
    private int PageSize { get; set; } = 9;
    private int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);

    private static readonly Dictionary<string, string> Categories = new()
    {
        ["all"] = "🌍 All",
        ["cultural"] = "🏛️ Culture",
        ["natural"] = "🌿 Nature",
        ["beach"] = "🏖️ Beach",
        ["city"] = "🏙️ City",
    };

    protected override async Task OnInitializedAsync()
    {
        await LoadLocationsAsync();
    }

    private async Task LoadLocationsAsync()
    {
        IsLoading = true;
        try
        {
            var result = await DiscoveryAppService.GetLocationsAsync(new GetDiscoveryLocationsInput
            {
                Category = SelectedCategory == "all" ? null : SelectedCategory,
                SearchKeyword = string.IsNullOrWhiteSpace(SearchKeyword) ? null : SearchKeyword,
                MaxResultCount = PageSize,
                SkipCount = (CurrentPage - 1) * PageSize,
            });

            Locations = result.Items.ToList();
            TotalCount = (int)result.TotalCount;
        }
        catch (Exception ex)
        {
            await Message.Error(ex.Message);
        }
        finally
        {
            IsLoading = false;
        }
    }

    private async Task OnCategoryChangedAsync(string category)
    {
        SelectedCategory = category;
        CurrentPage = 1;
        await LoadLocationsAsync();
    }

    private async Task OnSearchChangedAsync(string keyword)
    {
        SearchKeyword = keyword;
        CurrentPage = 1;
        await LoadLocationsAsync();
    }

    private async Task OnPageChangedAsync(int page)
    {
        if (page < 1 || page > TotalPages) return;
        CurrentPage = page;
        await LoadLocationsAsync();
    }

    private void NavigateToDetail(string xid)
    {
        NavigationManager.NavigateTo($"/discovery/{xid}");
    }
}
