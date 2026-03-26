using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace MovieCollectionApp.Genres;

public interface IGenreAppService :
    ICrudAppService<
        GenreDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateUpdateGenreDto>
{
}
