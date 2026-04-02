using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Blazorise;
using Blazorise.DataGrid;
using TravelPlanner.Entities;
using TravelPlanner.Services.Travels;
using Volo.Abp.Application.Dtos;

namespace TravelPlanner.Pages;

public partial class Travels
{
    private DataGrid<TravelDto> DataGridRef = default!;
    
    private IReadOnlyList<TravelDto> TravelList { get; set; } = [];
    private int TotalCount { get; set; }
    private int PageSize { get; set; } = 10;
    private string Filter { get; set; } = string.Empty;

    private Modal CreateModal = default!;
    private Modal EditModal = default!;
    private Validations CreateValidationsRef = default!;
    private Validations EditValidationsRef = default!;

    private CreateUpdateTravelDto NewTravel { get; set; } = new();
    private CreateUpdateTravelDto EditingTravel { get; set; } = new();
    private Guid EditingTravelId { get; set; }

    private string CreateSelectedTab { get; set; } = "general";
    private string EditSelectedTab { get; set; } = "general";

    private async Task GetTravelsAsync()
    {
        await DataGridRef.Reload();
    }

    private async Task LoadDataAsync(DataGridReadDataEventArgs<TravelDto> e)
    {
        PageSize = e.PageSize;

        var sorting = string.Empty;
        foreach (var col in e.Columns)
        {
            if (col.SortDirection != SortDirection.Default)
            {
                sorting = col.SortField + (col.SortDirection == SortDirection.Descending ? " DESC" : " ASC");
                break;
            }
        }

        var result = await TravelAppService.GetListAsync(new GetTravelsInput
        {
            MaxResultCount = e.PageSize,
            SkipCount = (e.Page - 1) * e.PageSize,
            Filter = Filter,
            Sorting = sorting
        });

        TravelList = result.Items;
        TotalCount = (int)result.TotalCount;

        await InvokeAsync(StateHasChanged);
    }

    private async Task OnFilterChanged(string value)
    {
        Filter = value;
        await GetTravelsAsync();
    }

    // ── Create ─────────────────────────────────────────────────────────────
    private async Task OpenCreateModalAsync()
    {
        NewTravel = new CreateUpdateTravelDto
        {
            StartDate = DateTime.Today,
            EndDate = DateTime.Today.AddDays(7)
        };
        CreateSelectedTab = "general";
        await CreateValidationsRef.ClearAll();
        await CreateModal.Show();
    }

    private async Task CloseCreateModalAsync()
    {
        await CreateModal.Hide();
    }

    private async Task CreateAsync()
    {
        if (!await CreateValidationsRef.ValidateAll())
            return;

        await TravelAppService.CreateAsync(NewTravel);
        await CreateModal.Hide();
        await DataGridRef.Reload();
    }

    // ── Edit ───────────────────────────────────────────────────────────────
    private async Task OpenEditModalAsync(TravelDto travel)
    {
        EditingTravelId = travel.Id;

        // Get full travel with transportations
        var fullTravel = await TravelAppService.GetAsync(travel.Id);

        EditingTravel = new CreateUpdateTravelDto
        {
            TripName = fullTravel.TripName,
            StartDate = fullTravel.StartDate,
            EndDate = fullTravel.EndDate,
            Status = fullTravel.Status,
            Destination = fullTravel.Destination,
            Notes = fullTravel.Notes,
            Transportations = fullTravel.Transportations.ConvertAll(t => new CreateUpdateTransportationDto
            {
                Type = t.Type,
                DepartureTime = t.DepartureTime,
                FromLocation = t.FromLocation,
                ToLocation = t.ToLocation,
                CompanyName = t.CompanyName,
                TicketNumber = t.TicketNumber,
                Notes = t.Notes
            })
        };

        EditSelectedTab = "general";
        await EditValidationsRef.ClearAll();
        await EditModal.Show();
    }

    private async Task CloseEditModalAsync()
    {
        await EditModal.Hide();
    }

    private async Task UpdateAsync()
    {
        if (!await EditValidationsRef.ValidateAll())
            return;

        await TravelAppService.UpdateAsync(EditingTravelId, EditingTravel);
        await EditModal.Hide();
        await DataGridRef.Reload();
    }

    // ── Delete ─────────────────────────────────────────────────────────────
    private async Task DeleteAsync(TravelDto travel)
    {
        var confirmed = await Message.Confirm(
            L["DeletionConfirmationMessage", travel.TripName]);

        if (!confirmed) return;

        await TravelAppService.DeleteAsync(travel.Id);
        await DataGridRef.Reload();
    }

    // ── Transportation helpers ─────────────────────────────────────────────
    private void AddTransportation(CreateUpdateTravelDto travel)
    {
        travel.Transportations.Add(new CreateUpdateTransportationDto
        {
            Type = TransportationType.Flight,
            DepartureTime = travel.StartDate
        });
        StateHasChanged();
    }

    private void RemoveTransportation(CreateUpdateTravelDto travel, int index)
    {
        travel.Transportations.RemoveAt(index);
        StateHasChanged();
    }

    // ── Helpers ────────────────────────────────────────────────────────────
    private static Color GetStatusColor(TravelStatus status) => status switch
    {
        TravelStatus.Draft => Color.Secondary,
        TravelStatus.Planned => Color.Info,
        TravelStatus.Ongoing => Color.Primary,
        TravelStatus.Completed => Color.Success,
        TravelStatus.Cancelled => Color.Danger,
        _ => Color.Light
    };
}
