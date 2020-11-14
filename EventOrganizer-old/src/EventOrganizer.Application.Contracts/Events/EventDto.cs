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
