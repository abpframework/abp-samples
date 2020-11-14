# Event Organizer Workshop Notes

This document has been prepared for me (@hikalkan) as a reference on giving the ABP & Blazor Workshop.

## Preparing to the Workshop

* Open the MongoDB Compass Community.
* Delete the existing MongoDB database.
* Create & open the solution in Rider, build, run migrations & test it.

## Requirements

The following tools are needed to be able to run the solution.

* .NET 5.0 SDK
* Visual Studio 2019 16.8.0+ or another compatible IDE (e.g. Rider)
* MongoDB Server

## Development

### Creating a new Application

* Use the following command line tool

````bash
abp new EventOrganizer -u blazor -d mongodb --preview
````

* Open the pre-opened solution in Rider

### Run, Introduce the Application

* Run the application, login & show the Identity module UI.

### Domain Layer & MongoDB Mapping

* Add the following `Event` aggregate (with `EventAttendee`) to the solution:

**Event**

````csharp
using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Auditing;

namespace EventOrganizer.Events
{
    public class Event : FullAuditedAggregateRoot<Guid>
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsFree { get; set; }

        public DateTime StartTime { get; set; }

        public ICollection<EventAttendee> Attendees { get; set; }

        public Event()
        {
            Attendees = new List<EventAttendee>();
        }
    }
}
````

**EventAttendee**

```csharp
using System;
using Volo.Abp.Auditing;

namespace EventOrganizer.Events
{
    public class EventAttendee : IHasCreationTime
    {
        public Guid UserId { get; set; }

        public DateTime CreationTime { get; set; }
    }
}
```

* Add the following property to the `EventOrganizerMongoDbContext`:

````csharp
public IMongoCollection<Event> Events => Collection<Event>();
````

