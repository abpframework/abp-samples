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

namespace MovieCollectionApp.Actors;

[Authorize(MovieCollectionAppPermissions.Actors.Default)]
public class ActorAppService : ApplicationService, IActorAppService
{
    private readonly IRepository<Actor, Guid> _actorRepository;
    private readonly IRepository<Movie, Guid> _movieRepository;

    public ActorAppService(
        IRepository<Actor, Guid> actorRepository,
        IRepository<Movie, Guid> movieRepository)
    {
        _actorRepository = actorRepository;
        _movieRepository = movieRepository;
    }

    public async Task<ActorDto> GetAsync(Guid id)
    {
        var actor = await _actorRepository.GetAsync(id);
        return ObjectMapper.Map<Actor, ActorDto>(actor);
    }

    public async Task<PagedResultDto<ActorDto>> GetListAsync(PagedAndSortedResultRequestDto input)
    {
        var queryable = await _actorRepository.GetQueryableAsync();
        var query = queryable
            .OrderBy(input.Sorting.IsNullOrWhiteSpace() ? "Name" : input.Sorting)
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount);

        var actors = await AsyncExecuter.ToListAsync(query);
        var totalCount = await AsyncExecuter.CountAsync(queryable);

        return new PagedResultDto<ActorDto>(
            totalCount,
            ObjectMapper.Map<List<Actor>, List<ActorDto>>(actors)
        );
    }

    [Authorize(MovieCollectionAppPermissions.Actors.Create)]
    public async Task<ActorDto> CreateAsync(CreateUpdateActorDto input)
    {
        var actor = ObjectMapper.Map<CreateUpdateActorDto, Actor>(input);
        await _actorRepository.InsertAsync(actor);
        return ObjectMapper.Map<Actor, ActorDto>(actor);
    }

    [Authorize(MovieCollectionAppPermissions.Actors.Edit)]
    public async Task<ActorDto> UpdateAsync(Guid id, CreateUpdateActorDto input)
    {
        var actor = await _actorRepository.GetAsync(id);
        ObjectMapper.Map(input, actor);
        await _actorRepository.UpdateAsync(actor);
        return ObjectMapper.Map<Actor, ActorDto>(actor);
    }

    [Authorize(MovieCollectionAppPermissions.Actors.Delete)]
    public async Task DeleteAsync(Guid id)
    {
        // Check if any movies reference this actor
        var movieQueryable = await _movieRepository.GetQueryableAsync();
        var hasMovies = await AsyncExecuter.AnyAsync(movieQueryable, m => m.ActorIds.Contains(id));

        if (hasMovies)
        {
            throw new BusinessException("MovieCollectionApp:ActorHasMovies")
                .WithData("id", id);
        }

        await _actorRepository.DeleteAsync(id);
    }
}
