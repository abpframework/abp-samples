using System;
using Volo.Abp.Application.Dtos;

namespace MovieCollectionApp.Movies;

public class GenreLookupDto : EntityDto<Guid>
{
    public string Name { get; set; }
}
