using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;
using BookReviewTracker4.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace BookReviewTracker4.Authors;

/// <summary>
/// Application service for managing authors.
/// </summary>
public class AuthorAppService : CrudAppService<
    Author,
    AuthorDto,
    Guid,
    GetAuthorListInput,
    CreateUpdateAuthorDto,
    CreateUpdateAuthorDto>
{
    private readonly IRepository<Book, Guid> _bookRepository;

    public AuthorAppService(
        IRepository<Author, Guid> repository,
        IRepository<Book, Guid> bookRepository)
        : base(repository)
    {
        _bookRepository = bookRepository;
    }

    public override async Task<PagedResultDto<AuthorDto>> GetListAsync(GetAuthorListInput input)
    {
        var query = (await Repository.GetQueryableAsync())
            .WhereIf(!input.Filter.IsNullOrWhiteSpace(),
                x => x.Name.Contains(input.Filter!) || x.Bio.Contains(input.Filter!));

        var totalCount = await AsyncExecuter.CountAsync(query);

        query = query
            .OrderBy(x => x.Name)
            .PageBy(input.SkipCount, input.MaxResultCount);

        var items = await AsyncExecuter.ToListAsync(query);

        // Get book counts
        var authorIds = items.Select(x => x.Id).ToList();
        var bookQuery = await _bookRepository.GetQueryableAsync();
        var bookCounts = await AsyncExecuter.ToListAsync(
            bookQuery.Where(b => authorIds.Contains(b.AuthorId))
                .GroupBy(b => b.AuthorId)
                .Select(g => new { AuthorId = g.Key, Count = g.Count() })
        );
        var bookCountDict = bookCounts.ToDictionary(x => x.AuthorId, x => x.Count);

        var dtos = items.Select(x => MapToDto(x, bookCountDict)).ToList();

        return new PagedResultDto<AuthorDto>(totalCount, dtos);
    }

    public override async Task<AuthorDto> GetAsync(Guid id)
    {
        var entity = await Repository.GetAsync(id);
        return MapToDto(entity);
    }

    public override async Task<AuthorDto> CreateAsync(CreateUpdateAuthorDto input)
    {
        var entity = new Author(GuidGenerator.Create(), input.Name)
        {
            Bio = input.Bio
        };

        var createdEntity = await Repository.InsertAsync(entity, true);
        return MapToDto(createdEntity);
    }

    public override async Task<AuthorDto> UpdateAsync(Guid id, CreateUpdateAuthorDto input)
    {
        var entity = await Repository.GetAsync(id);

        entity.Name = input.Name;
        entity.Bio = input.Bio;

        var updatedEntity = await Repository.UpdateAsync(entity, true);
        return MapToDto(updatedEntity);
    }

    private static AuthorDto MapToDto(Author entity, Dictionary<Guid, int>? bookCounts = null)
    {
        return new AuthorDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Bio = entity.Bio,
            BookCount = bookCounts?.GetValueOrDefault(entity.Id, 0) ?? 0
        };
    }

    protected override string GetListPolicyName => BookReviewTracker4Permissions.Authors.Default;
    protected override string GetPolicyName => BookReviewTracker4Permissions.Authors.Default;
    protected override string CreatePolicyName => BookReviewTracker4Permissions.Authors.Create;
    protected override string UpdatePolicyName => BookReviewTracker4Permissions.Authors.Update;
    protected override string DeletePolicyName => BookReviewTracker4Permissions.Authors.Delete;
}
