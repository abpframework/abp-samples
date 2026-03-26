using System;
using Volo.Abp.Application.Dtos;

namespace MovieCollectionApp.Actors;

public class ActorDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }

    public DateTime BirthDate { get; set; }

    public string Biography { get; set; }
}
