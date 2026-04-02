using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Blazorise;
using Microsoft.AspNetCore.Components;
using TravelPlanner.Entities;
using TravelPlanner.Services.Travels;

namespace TravelPlanner.Pages;

public partial class Dashboard
{
    private List<TravelDto> UpcomingTravels { get; set; } = new();
    private bool IsLoading { get; set; } = true;

    protected override async Task OnInitializedAsync()
    {
        await LoadUpcomingTravelsAsync();
    }

    private void NavigateToTravels()
    {
        NavigationManager.NavigateTo("/travels");
    }

    private async Task LoadUpcomingTravelsAsync()
    {
        IsLoading = true;
        try
        {
            UpcomingTravels = await TravelAppService.GetUpcomingTravelsAsync();
        }
        finally
        {
            IsLoading = false;
        }
    }

    private static Color GetStatusColor(TravelStatus status) => status switch
    {
        TravelStatus.Draft => Color.Secondary,
        TravelStatus.Planned => Color.Info,
        TravelStatus.Ongoing => Color.Primary,
        TravelStatus.Completed => Color.Success,
        TravelStatus.Cancelled => Color.Danger,
        _ => Color.Light
    };

    private static string GetCardBorderClass(TravelStatus status) => status switch
    {
        TravelStatus.Planned => "border-info",
        TravelStatus.Ongoing => "border-primary",
        TravelStatus.Draft => "border-secondary",
        _ => "border-light"
    };

    private static string GetDaysLeftClass(int daysLeft) => daysLeft switch
    {
        0 => "text-danger",
        <= 7 => "text-warning",
        <= 14 => "text-info",
        _ => "text-success"
    };

    private static string GetProgressBarClass(int daysLeft) => daysLeft switch
    {
        0 => "bg-danger",
        <= 7 => "bg-warning",
        <= 14 => "bg-info",
        _ => "bg-success"
    };

    // 30 günlük pencerede ne kadar yaklaştığımızı gösterir (30 gün = %0, bugün = %100)
    private static int GetProgressPercent(int daysLeft)
    {
        if (daysLeft <= 0) return 100;
        if (daysLeft >= 30) return 0;
        return 100 - (int)((daysLeft / 30.0) * 100);
    }
}
