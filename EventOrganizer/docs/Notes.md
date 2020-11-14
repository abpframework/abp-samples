# Event Organizer Workshop Notes

This document has been prepared for me (@hikalkan) as a reference on giving the ABP & Blazor Workshop.

## Preparing to the Workshop

* Prepare the solution
  * Create empty project: `abp new EventOrganizer -u blazor -d mongodb --preview`
  * Add styles to main.css.
  * Fix classes in index.html/body tag: `bg-dark text-light`.
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

### Domain Layer

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

### MongoDB Mapping

* Add the following property to the `EventOrganizerMongoDbContext`:

````csharp
public IMongoCollection<Event> Events => Collection<Event>();
````

### Clean Index.razor & Add the Header & "Create Event" button

* Clean the Index.razor file.
* Paste the following code:

````html
@page "/"
@inherits EventOrganizerComponentBase
<Row Class="mb-4">
    <Column Class="text-left">
        <h1>Upcoming Events</h1>
    </Column>
    <Column Class="text-right">
        @if (CurrentUser.IsAuthenticated)
        {
            <a class="btn btn-primary" href="/create-event">
                <i class="fa fa-sign-in-alt"></i> @L["CreateEvent"]
            </a>
        }
    </Column>
</Row>
````

### Implement Event Creation

* Create the Initial `IEventAppService` with the `CreateAsync` method:

````csharp
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EventOrganizer.Events
{
    public interface IEventAppService : IApplicationService
    {
        Task<Guid> CreateAsync(EventCreationDto input);
    }
}
````

* Add `EventCreationDto` class:

````csharp
using System;
using System.ComponentModel.DataAnnotations;

namespace EventOrganizer.Events
{
    public class EventCreationDto
    {
        [Required]
        [StringLength(100)]
        public string Title { get; set; }

        [Required]
        [StringLength(2000)]
        public string Description { get; set; }

        public bool IsFree { get; set; }

        public DateTime StartTime { get; set; }
    }
}
````

* Implement the `EventAppService`:

````csharp
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Domain.Repositories;

namespace EventOrganizer.Events
{
    public class EventAppService : EventOrganizerAppService, IEventAppService
    {
        private readonly IRepository<Event, Guid> _eventRepository;

        public EventAppService(IRepository<Event, Guid> eventRepository)
        {
            _eventRepository = eventRepository;
        }

        [Authorize]
        public async Task<Guid> CreateAsync(EventCreationDto input)
        {
            var eventEntity = ObjectMapper.Map<EventCreationDto, Event>(input);
            await _eventRepository.InsertAsync(eventEntity);
            return eventEntity.Id;
        }
    }
}
````

* Create the `CreateEvent.razor` file:

````csharp
@page "/create-event"
@inherits EventOrganizerComponentBase
<Heading Size="HeadingSize.Is3" Margin="Margin.Is5.FromTop.Is4.FromBottom" Class="text-center">Create Event</Heading>
<Row>
    <Column ColumnSize="ColumnSize.Is6.Is3.WithOffset">
        <div class="p-lg-5 p-md-3 event-form">
            <EditForm Model="@Event" OnValidSubmit="Create">
                <Field>
                    <FieldLabel>@L["Title"]</FieldLabel>
                    <TextEdit @bind-Text="@Event.Title" />
                </Field>
                <Field>
                    <FieldLabel>@L["Description"]</FieldLabel>
                    <MemoEdit @bind-Text="@Event.Description" />
                </Field>
                <Field>
                    <Check TValue="bool" @bind-Checked="@Event.IsFree">@L["Free"]</Check>
                </Field>
                <Field>
                    <FieldLabel>@L["StartTime"]</FieldLabel>
                    <DateEdit TValue="DateTime" @bind-Date="@Event.StartTime" />
                </Field>
                <Button Type="@ButtonType.Submit" Block="true" Color="@Color.Primary" Size="Size.Large">@L["Save"]</Button>
            </EditForm>
        </div>
    </Column>
</Row>
````

