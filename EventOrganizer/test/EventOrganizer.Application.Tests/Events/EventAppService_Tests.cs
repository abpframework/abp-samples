using System;
using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace EventOrganizer.Events
{
    [Collection(EventOrganizerTestConsts.CollectionDefinitionName)]
    public class EventAppService_Tests : EventOrganizerApplicationTestBase
    {
        private readonly IEventAppService _eventAppService;

        public EventAppService_Tests()
        {
            _eventAppService = GetRequiredService<IEventAppService>();
        }

        [Fact]
        public async Task Should_Create_A_Valid_Event()
        {
            // Create an event

            var eventId = await _eventAppService.CreateAsync(
                new EventCreationDto
                {
                    Title = "My test event 1",
                    Description = "My test event description 1",
                    IsFree = true,
                    StartTime = DateTime.Now.AddDays(2)
                }
            );

            eventId.ShouldNotBe(Guid.Empty);

            // Get the event

            var @event = await _eventAppService.GetAsync(eventId);
            @event.Title.ShouldBe("My test event 1");

            // Get upcoming events

            var events = await _eventAppService.GetUpcomingAsync();
            events.ShouldContain(x => x.Title == "My test event 1");
        }
    }
}
