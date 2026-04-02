using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using TravelPlanner.Data;
using TravelPlanner.Entities;
using TravelPlanner.Permissions;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TravelPlanner.Services.Travels;

[Authorize(TravelPlannerPermissions.Travels.Default)]
public class TravelAppService : CrudAppService<
    Travel,
    TravelDto,
    Guid,
    GetTravelsInput,
    CreateUpdateTravelDto>,
    ITravelAppService
{
    private readonly TravelPlannerDbContext _dbContext;

    public TravelAppService(
        IRepository<Travel, Guid> repository,
        TravelPlannerDbContext dbContext)
        : base(repository)
    {
        _dbContext = dbContext;
        GetPolicyName = TravelPlannerPermissions.Travels.Default;
        GetListPolicyName = TravelPlannerPermissions.Travels.Default;
        CreatePolicyName = TravelPlannerPermissions.Travels.Create;
        UpdatePolicyName = TravelPlannerPermissions.Travels.Edit;
        DeletePolicyName = TravelPlannerPermissions.Travels.Delete;
    }

    protected override async Task<IQueryable<Travel>> CreateFilteredQueryAsync(GetTravelsInput input)
    {
        var query = await base.CreateFilteredQueryAsync(input);

        if (!string.IsNullOrWhiteSpace(input.Filter))
        {
            query = query.Where(t =>
                t.TripName.Contains(input.Filter) ||
                (t.Destination != null && t.Destination.Contains(input.Filter)));
        }

        if (input.Status.HasValue)
        {
            query = query.Where(t => t.Status == input.Status.Value);
        }

        return query;
    }

    public override async Task<TravelDto> GetAsync(Guid id)
    {
        var travel = await _dbContext.Travels
            .Include(t => t.Transportations)
            .FirstOrDefaultAsync(t => t.Id == id);

        if (travel == null)
            throw new Volo.Abp.Domain.Entities.EntityNotFoundException(typeof(Travel), id);

        return ObjectMapper.Map<Travel, TravelDto>(travel);
    }

    [Authorize(TravelPlannerPermissions.Travels.Create)]
    public override async Task<TravelDto> CreateAsync(CreateUpdateTravelDto input)
    {
        var travel = new Travel(
            GuidGenerator.Create(),
            input.TripName,
            input.StartDate,
            input.EndDate,
            input.Status,
            input.Destination,
            input.Notes
        );

        foreach (var t in input.Transportations)
        {
            travel.Transportations.Add(new Transportation(
                GuidGenerator.Create(),
                travel.Id,
                t.Type,
                t.DepartureTime,
                t.FromLocation,
                t.ToLocation,
                t.CompanyName,
                t.TicketNumber,
                t.Notes
            ));
        }

        await Repository.InsertAsync(travel);

        return ObjectMapper.Map<Travel, TravelDto>(travel);
    }

    [Authorize(TravelPlannerPermissions.Travels.Edit)]
    public override async Task<TravelDto> UpdateAsync(Guid id, CreateUpdateTravelDto input)
    {
        var travel = await _dbContext.Travels
            .Include(t => t.Transportations)
            .FirstOrDefaultAsync(t => t.Id == id);

        if (travel == null)
            throw new Volo.Abp.Domain.Entities.EntityNotFoundException(typeof(Travel), id);

        travel.Update(
            input.TripName,
            input.StartDate,
            input.EndDate,
            input.Status,
            input.Destination,
            input.Notes
        );

        // Mevcut transportations'ları temizle ve yeniden ekle
        travel.Transportations.Clear();
        foreach (var t in input.Transportations)
        {
            travel.Transportations.Add(new Transportation(
                GuidGenerator.Create(),
                travel.Id,
                t.Type,
                t.DepartureTime,
                t.FromLocation,
                t.ToLocation,
                t.CompanyName,
                t.TicketNumber,
                t.Notes
            ));
        }

        await _dbContext.SaveChangesAsync();

        return ObjectMapper.Map<Travel, TravelDto>(travel);
    }

    [Authorize(TravelPlannerPermissions.Travels.Default)]
    public async Task<List<TravelDto>> GetUpcomingTravelsAsync()
    {
        var today = DateTime.Today;
        var oneMonthLater = today.AddMonths(1);

        var travels = await _dbContext.Travels
            .Include(t => t.Transportations)
            .Where(t =>
                t.StartDate >= today &&
                t.StartDate <= oneMonthLater &&
                t.Status != TravelStatus.Cancelled &&
                t.Status != TravelStatus.Completed)
            .OrderBy(t => t.StartDate)
            .ToListAsync();

        return ObjectMapper.Map<List<Travel>, List<TravelDto>>(travels);
    }
}
