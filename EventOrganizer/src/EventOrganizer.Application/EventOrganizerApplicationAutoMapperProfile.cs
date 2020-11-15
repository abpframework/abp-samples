using AutoMapper;
using EventOrganizer.Events;

namespace EventOrganizer
{
    public class EventOrganizerApplicationAutoMapperProfile : Profile
    {
        public EventOrganizerApplicationAutoMapperProfile()
        {
            CreateMap<EventCreationDto, Event>();
            CreateMap<Event, EventDto>();
            CreateMap<Event, EventDetailDto>();
            CreateMap<EventAttendee, EventAttendeeDto>();
        }
    }
}
