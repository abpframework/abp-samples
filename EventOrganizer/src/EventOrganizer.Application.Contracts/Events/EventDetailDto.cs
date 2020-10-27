using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace EventOrganizer.Events
{
    public class EventDetailDto : CreationAuditedEntityDto<Guid>
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public bool IsFree { get; set; }

        public DateTime StartTime { get; set; }

        public List<EventAttendeeDto> Attendees { get; set; }
    }
}
