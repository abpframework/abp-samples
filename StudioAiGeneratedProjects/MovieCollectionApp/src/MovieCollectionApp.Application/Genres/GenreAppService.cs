using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using MovieCollectionApp.Movies;
using MovieCollectionApp.Permissions;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace MovieCollectionApp.Genres;

[Authorize(MovieCollectionAppPermissions.Genres.Default)]
public class GenreAppService : ApplicationService, IGenreAppService
{
    private readonly IRepository<Genre, Guid> _genreRepository;
    private readonly IRepository<Movie, Guid> _movieRepository;

    public GenreAppService(
        IRepository<Genre, Guid> genreRepository,
        IRepository<Movie, Guid> movieRepository)
    {
        _genreRepository = genreRepository;
        _movieRepository = movieRepository;
    }

    public async Task<GenreDto> GetAsync(Guid id)
    {
        var genre = await _genreRepository.GetAsync(id);
        return ObjectMapper.Map<Genre, GenreDto>(genre);
    }

    public async Task<PagedResultDto<GenreDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _genreRepository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var genres = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<GenreDto>(
            totalCount,
            ObjectMapper.Map<List<Genre>, List<GenreDto>>(genres)
        );
    }

    [Authorize(MovieCollectionAppPermissions.Genres.Create)]
    public async Task<GenreDto> CreateAsync(CreateUpdateGenreDto input)
    {
        var genre = ObjectMapper.Map<CreateUpdateGenreDto, Genre>(input);
        await _genreRepository.InsertAsync(genre);
        return ObjectMapper.Map<Genre, GenreDto>(genre);
    }

    [Authorize(MovieCollectionAppPermissions.Genres.Edit)]
    public async Task<GenreDto> UpdateAsync(Guid id, CreateUpdateGenreDto input)
    {
        var genre = await _genreRepository.GetAsync(id);
        ObjectMapper.Map(input, genre);
        await _genreRepository.UpdateAsync(genre);
        return ObjectMapper.Map<Genre, GenreDto>(genre);
    }

    [Authorize(MovieCollectionAppPermissions.Genres.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        // Check if any movies reference this genre
        var movieQueryable = await _movieRepository.GetQueryableAsync();
        var hasMovies = await AsyncExecuter.AnyAsync(movieQueryable, m => m.GenreId == id);

        if (hasMovies)
        {
            throw new BusinessException("MovieCollectionApp:GenreHasMovies")
                .WithData("id", id);
        }

        await _genreRepository.DeleteAsync(id);
    }
}
