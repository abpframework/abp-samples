using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace MovieCollectionApp.Movies;

public interface IMovieAppService : IApplicationService
{
    Task<MovieDto> GetAsync(Guid id);

    Task<PagedResultDto<MovieDto>> GetListAsync(PagedAndSortedResultRequestDto input);

    Task<MovieDto> CreateAsync(CreateUpdateMovieDto input);

    Task<MovieDto> UpdateAsync(Guid id, CreateUpdateMovieDto input);

    Task DeleteAsync(Guid id);

    Task<ListResultDto<GenreLookupDto>> GetGenreLookupAsync();

    Task<ListResultDto<ActorLookupDto>> GetActorLookupAsync();
}
