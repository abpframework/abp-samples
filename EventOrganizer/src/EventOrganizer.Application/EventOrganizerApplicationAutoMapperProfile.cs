using AutoMapper;
using EventOrganizer.Events;
using Volo.Abp.AutoMapper;

namespace EventOrganizer
{
    public class EventOrganizerApplicationAutoMapperProfile : Profile
    {
        public EventOrganizerApplicationAutoMapperProfile()
        {
            CreateMap<EventCreationDto, Event>()
                .Ignore(x => x.Attendees);

            CreateMap<Event, EventDetailDto>();

            CreateMap<EventAttendee, EventAttendeeDto>()
                .Ignore(x => x.UserName);

            CreateMap<Event, EventDto>();
        }
    }
}
