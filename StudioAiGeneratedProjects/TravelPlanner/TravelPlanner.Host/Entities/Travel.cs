using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace TravelPlanner.Entities;

public class Travel : AuditedAggregateRoot<Guid>
{
    public string TripName { get; private set; } = null!;
    public DateTime StartDate { get; private set; }
    public DateTime EndDate { get; private set; }
    public TravelStatus Status { get; private set; }
    public string? Destination { get; private set; }
    public string? Notes { get; private set; }

    public ICollection<Transportation> Transportations { get; private set; } = new Collection<Transportation>();

    protected Travel() { }

    public Travel(
        Guid id,
        string tripName,
        DateTime startDate,
        DateTime endDate,
        TravelStatus status = TravelStatus.Draft,
        string? destination = null,
        string? notes = null)
    {
        Id = id;
        SetTripName(tripName);
        SetDates(startDate, endDate);
        Status = status;
        Destination = destination;
        Notes = notes;
    }

    public void Update(
        string tripName,
        DateTime startDate,
        DateTime endDate,
        TravelStatus status,
        string? destination,
        string? notes)
    {
        SetTripName(tripName);
        SetDates(startDate, endDate);
        Status = status;
        Destination = destination;
        Notes = notes;
    }

    private void SetTripName(string tripName)
    {
        TripName = Check.NotNullOrWhiteSpace(tripName, nameof(tripName), maxLength: TravelConsts.MaxTripNameLength);
    }

    private void SetDates(DateTime startDate, DateTime endDate)
    {
        if (endDate <= startDate)
        {
            throw new BusinessException(TravelPlannerDomainErrorCodes.EndDateMustBeAfterStartDate)
                .WithData("StartDate", startDate)
                .WithData("EndDate", endDate);
        }

        StartDate = startDate;
        EndDate = endDate;
    }
}
