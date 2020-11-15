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
