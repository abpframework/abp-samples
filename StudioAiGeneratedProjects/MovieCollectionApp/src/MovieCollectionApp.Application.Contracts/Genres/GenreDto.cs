using System;
using Volo.Abp.Application.Dtos;

namespace MovieCollectionApp.Genres;

public class GenreDto : AuditedEntityDto<Guid>
{
    public string Name { get; set; }

    public string Description { get; set; }
}
