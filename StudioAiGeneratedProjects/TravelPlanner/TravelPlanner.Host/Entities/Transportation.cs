using System;
using Volo.Abp;
using Volo.Abp.Domain.Entities;

namespace TravelPlanner.Entities;

public class Transportation : Entity<Guid>
{
    public Guid TravelId { get; private set; }
    public TransportationType Type { get; private set; }
    public DateTime DepartureTime { get; private set; }
    public string? FromLocation { get; private set; }
    public string? ToLocation { get; private set; }
    public string? CompanyName { get; private set; }
    public string? TicketNumber { get; private set; }
    public string? Notes { get; private set; }

    protected Transportation() { }

    public Transportation(
        Guid id,
        Guid travelId,
        TransportationType type,
        DateTime departureTime,
        string? fromLocation = null,
        string? toLocation = null,
        string? companyName = null,
        string? ticketNumber = null,
        string? notes = null)
    {
        Id = id;
        TravelId = travelId;
        Type = type;
        DepartureTime = departureTime;
        FromLocation = fromLocation;
        ToLocation = toLocation;
        CompanyName = companyName;
        TicketNumber = ticketNumber;
        Notes = notes;
    }

    public void Update(
        TransportationType type,
        DateTime departureTime,
        string? fromLocation,
        string? toLocation,
        string? companyName,
        string? ticketNumber,
        string? notes)
    {
        Type = type;
        DepartureTime = departureTime;
        FromLocation = fromLocation;
        ToLocation = toLocation;
        CompanyName = companyName;
        TicketNumber = ticketNumber;
        Notes = notes;
    }
}
