using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using MovieCollectionApp.Actors;
using MovieCollectionApp.Genres;
using MovieCollectionApp.Permissions;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using System.Linq.Dynamic.Core;

namespace MovieCollectionApp.Movies;

[Authorize(MovieCollectionAppPermissions.Movies.Default)]
public class MovieAppService : ApplicationService, IMovieAppService
{
    private readonly IRepository<Movie, Guid> _movieRepository;
    private readonly IRepository<Genre, Guid> _genreRepository;
    private readonly IRepository<Actor, Guid> _actorRepository;

    public MovieAppService(
        IRepository<Movie, Guid> movieRepository,
        IRepository<Genre, Guid> genreRepository,
        IRepository<Actor, Guid> actorRepository)
    {
        _movieRepository = movieRepository;
        _genreRepository = genreRepository;
        _actorRepository = actorRepository;
    }

    public async Task<MovieDto> GetAsync(Guid id)
    {
        var movie = await _movieRepository.GetAsync(id);
        return await MapToMovieDtoWithNamesAsync(movie);
    }

    public async Task<PagedResultDto<MovieDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _movieRepository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Title" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var movies = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        var movieDtos = new List<MovieDto>();
        foreach (var movie in movies)
        {
            movieDtos.Add(await MapToMovieDtoWithNamesAsync(movie));
        }

        return new PagedResultDto<MovieDto>(totalCount, movieDtos);
    }

    [Authorize(MovieCollectionAppPermissions.Movies.Create)]
    public async Task<MovieDto> CreateAsync(CreateUpdateMovieDto input)
    {
        await ValidateGenreExistsAsync(input.GenreId);
        await ValidateActorsExistAsync(input.ActorIds);

        var movie = ObjectMapper.Map<CreateUpdateMovieDto, Movie>(input);
        await _movieRepository.InsertAsync(movie);
        return await MapToMovieDtoWithNamesAsync(movie);
    }

    [Authorize(MovieCollectionAppPermissions.Movies.Edit)]
    public async Task<MovieDto> UpdateAsync(Guid id, CreateUpdateMovieDto input)
    {
        await ValidateGenreExistsAsync(input.GenreId);
        await ValidateActorsExistAsync(input.ActorIds);

        var movie = await _movieRepository.GetAsync(id);
        ObjectMapper.Map(input, movie);
        await _movieRepository.UpdateAsync(movie);
        return await MapToMovieDtoWithNamesAsync(movie);
    }

    [Authorize(MovieCollectionAppPermissions.Movies.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        await _movieRepository.DeleteAsync(id);
    }

    public async Task<ListResultDto<GenreLookupDto>> GetGenreLookupAsync()
    {
        var genres = await _genreRepository.GetListAsync();
        return new ListResultDto<GenreLookupDto>(
            ObjectMapper.Map<List<Genre>, List<GenreLookupDto>>(genres)
        );
    }

    public async Task<ListResultDto<ActorLookupDto>> GetActorLookupAsync()
    {
        var actors = await _actorRepository.GetListAsync();
        return new ListResultDto<ActorLookupDto>(
            ObjectMapper.Map<List<Actor>, List<ActorLookupDto>>(actors)
        );
    }

    private async Task<MovieDto> MapToMovieDtoWithNamesAsync(Movie movie)
    {
        var movieDto = ObjectMapper.Map<Movie, MovieDto>(movie);

        // Resolve genre name
        var genre = await _genreRepository.FindAsync(movie.GenreId);
        movieDto.GenreName = genre?.Name ?? string.Empty;

        // Resolve actor names
        movieDto.ActorNames = new List<string>();
        if (movie.ActorIds != null && movie.ActorIds.Count > 0)
        {
            var actorQueryable = await _actorRepository.GetQueryableAsync();
            var actors = await AsyncExecuter.ToListAsync(
                actorQueryable.Where(a => movie.ActorIds.Contains(a.Id))
            );
            movieDto.ActorNames = actors.Select(a => a.Name).ToList();
        }

        return movieDto;
    }

    private async Task ValidateGenreExistsAsync(Guid genreId)
    {
        var genre = await _genreRepository.FindAsync(genreId);
        if (genre == null)
        {
            throw new BusinessException("MovieCollectionApp:GenreNotFound")
                .WithData("id", genreId);
        }
    }

    private async Task ValidateActorsExistAsync(List<Guid> actorIds)
    {
        if (actorIds == null || actorIds.Count == 0)
        {
            return;
        }

        var actorQueryable = await _actorRepository.GetQueryableAsync();
        var existingCount = await AsyncExecuter.CountAsync(
            actorQueryable.Where(a => actorIds.Contains(a.Id))
        );

        if (existingCount != actorIds.Count)
        {
            throw new BusinessException("MovieCollectionApp:SomeActorsNotFound");
        }
    }
}
