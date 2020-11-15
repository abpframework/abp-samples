# Event Organizer Workshop Notes

This document is a reference on giving the ABP & Blazor Workshop. It contains the steps to build the application.

## TODO

* Add final images at the beginning
* Add the application logo at the end

## Requirements

The following tools are needed to be able to run the solution.

* .NET 5.0 SDK
* Visual Studio 2019 16.8.0+ or another compatible IDE
* MongoDB Server (with MongoDB Compass)

## Development

### Clean the Database

* If it does exists, delete the MongoDB `EventOrganizer` database for a fresh start.

### Creating a new Application

* Use the following ABP CLI command:

````bash
abp new EventOrganizer -u blazor -d mongodb --preview
````

### Open & Run the Application

* Open the solution in Visual Studio (or your favorite IDE).
* Run the `EventOrganizer.DbMigrator` application to seed the initial data.
* Run the `EventOrganizer.HttpApi.Host` application that starts the server side.
* Run the `EventOrganizer.Blazor` application to start the UI.

### Apply the Custom Styles

* Add styles to `wwwroot/main.css`:

````css
body.abp-application-layout {
    background-color: #222 !important;
    font-size: 18px;
}
nav#main-navbar.bg-dark {
    background-color: #222 !important;
    box-shadow: none !important;
}
.event-pic {
    width: 100%;
    border-radius: 12px;
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,.5);
    margin-bottom: 10px;
}
.event-link:hover, .event-link:hover *{
    text-decoration: none;
}
.event-link:hover .event-pic {
    box-shadow: 5px 5px 0px 0px #ffd800;
}
.event-form {
    background-color: #333 !important;
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,.5);
    border-radius: 12px;
}
.table {
    background: #fff;
    border-radius: 12px;
    box-shadow: 5px 5px 0px 0px rgba(0,0,0,.5);
}
.table th{
    border: 0 !important;
}
.modal {
    color: #333;
}
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}
.page-item:last-child .page-link {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
}
.btn {
    border-radius: 8px;
}
.att-list {
    list-style: none;
    padding: 0;
}
.att-list li {
    padding: 4px 0 0 0;
}
````

* `wwwroot/index.html`: Remove `bg-light` class from the `body` tag and add `bg-dark text-light`.

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

* Clean the `Index.razor` file.
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

* Open `Localization/EventOrganizer/en.json` in the `EventOrganizer.Domain.Shared` project and add the following entry:

````json
"CreateEvent": "Create a new event!"
````

The Result (run the `EventOrganizer.Blazor` application to see):

![index-title](images/index-title.png)

### Event Creation

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

* Add AutoMapper mapping to the `EventOrganizerApplicationAutoMapperProfile` class:

````csharp
using AutoMapper;
using EventOrganizer.Events;

namespace EventOrganizer
{
    public class EventOrganizerApplicationAutoMapperProfile : Profile
    {
        public EventOrganizerApplicationAutoMapperProfile()
        {
            CreateMap<EventCreationDto, Event>();
        }
    }
}
````

This will automatically create the HTTP (REST) API for the application service (run the `EventOrganizer.HttpApi.Host` application to see it on the Swagger UI):

![swagger-event-create](images/swagger-event-create.png)

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

* Create a partial `CreateEvent` class in the same folder, with the `CreateEvent.razor.cs` as the file name:

````csharp
using System.Threading.Tasks;
using EventOrganizer.Events;
using Microsoft.AspNetCore.Components;

namespace EventOrganizer.Blazor.Pages
{
    public partial class CreateEvent
    {
        private EventCreationDto Event { get; set; } = new EventCreationDto();

        private readonly IEventAppService _eventAppService;
        private readonly NavigationManager _navigationManager;

        public CreateEvent(
            IEventAppService eventAppService,
            NavigationManager navigationManager)
        {
            _eventAppService = eventAppService;
            _navigationManager = navigationManager;
        }

        private async Task Create()
        {
            var eventId = await _eventAppService.CreateAsync(Event);
            _navigationManager.NavigateTo("/events/" + eventId);
        }
    }
}
````

The final UI is (run the `EventOrganizer.Blazor` application and click to the "Create Event" button):

![event-create-ui](images/event-create-ui.png)

### Upcoming Events (Home Page)

* Open the `IEventAppService` and add a `GetUpcomingAsync` method to get the list of upcoming events:

````csharp
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EventOrganizer.Events
{
    public interface IEventAppService : IApplicationService
    {
        Task<Guid> CreateAsync(EventCreationDto input);

        Task<List<EventDto>> GetUpcomingAsync();
    }
}
````

* Add a `EventDto` class:

````csharp
using System;
using Volo.Abp.Application.Dtos;

namespace EventOrganizer.Events
{
    public class EventDto : EntityDto<Guid>
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsFree { get; set; }

        public DateTime StartTime { get; set; }

        public int AttendeesCount { get; set; }
    }
}
````

* Implement the `GetUpcomingAsync` in the `EventAppService` class:

````csharp
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<List<EventDto>> GetUpcomingAsync()
        {
            var events = await AsyncExecuter.ToListAsync(
                _eventRepository
                    .Where(x => x.StartTime > Clock.Now)
                    .OrderBy(x => x.StartTime)
            );

            return ObjectMapper.Map<List<Event>, List<EventDto>>(events);
        }
    }
}
````

* Add the following line into the `EventOrganizerApplicationAutoMapperProfile` constructor:

````csharp
CreateMap<Event, EventDto>();
````

Run the `EventOrganizer.HttpApi.Host` application to see the new `upcoming` endpoint on the Swagger UI:

![swagger-event-upcoming](images/swagger-event-upcoming.png)

* Change the `Pages/Index.razor.cs` content in the `EventOrganizer.Blazor` project as shown below:

```csharp
using System.Collections.Generic;
using System.Threading.Tasks;
using EventOrganizer.Events;

namespace EventOrganizer.Blazor.Pages
{
    public partial class Index
    {
        private List<EventDto> UpcomingEvents { get; set; } = new List<EventDto>();

        private readonly IEventAppService _eventAppService;

        public Index(IEventAppService eventAppService)
        {
            _eventAppService = eventAppService;
        }

        protected override async Task OnInitializedAsync()
        {
            UpcomingEvents = await _eventAppService.GetUpcomingAsync();
        }
    }
}
```

* Change the `Pages/Index.razor` content in the `EventOrganizer.Blazor` project as shown below:

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
                <i class="fa fa-plus"></i> @L["CreateEvent"]
            </a>
        }
    </Column>
</Row>
<Row>
    @foreach (var upcomingEvent in UpcomingEvents)
    {
        <Column Class="col-12 col-lg-4 col-md-6">
            <a class="mb-5 position-relative d-block event-link" href="/events/@upcomingEvent.Id">
                <div class="position-absolute text-right w-100 px-3 py-2" style="left: 0; top: 2px;">
                    @if (upcomingEvent.IsFree)
                    {
                        <Badge Color="Color.Success" Class="mr-1">FREE</Badge>
                    }
                    <span class="badge badge-warning font-weight-normal">
                        <i class="fas fa-user-friends"></i>
                        <span class="font-weight-bold">@upcomingEvent.AttendeesCount</span>
                    </span>
                </div>
                <img src="https://picsum.photos/seed/@upcomingEvent.Id/400/300" class="event-pic"/>
                <div class="px-3 py-1">
                    <small class="font-weight-bold text-warning my-2 d-block text-uppercase">@upcomingEvent.StartTime.ToLongDateString()</small>
                    <p class="h4 text-light d-block mb-2">@upcomingEvent.Title</p>
                    <p class="text-light" style="opacity: .65;">@upcomingEvent.Description.TruncateWithPostfix(150)</p>
                </div>
            </a>
        </Column>
    }
</Row>
````

The new home page is shown below:

![event-list-ui](D:\Github\abp-samples\EventOrganizer\docs\images\event-list-ui.png)