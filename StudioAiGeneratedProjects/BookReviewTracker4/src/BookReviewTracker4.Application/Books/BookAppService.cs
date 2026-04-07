using System;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;
using BookReviewTracker4.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Validation;

namespace BookReviewTracker4.Books;

/// <summary>
/// Application service for managing books.
/// </summary>
public class BookAppService : CrudAppService<
    Book,
    BookDto,
    Guid,
    GetBookListInput,
    CreateUpdateBookDto,
    CreateUpdateBookDto>
{
    private readonly IRepository<Author, Guid> _authorRepository;

    public BookAppService(
        IRepository<Book, Guid> repository,
        IRepository<Author, Guid> authorRepository)
        : base(repository)
    {
        _authorRepository = authorRepository;
    }

    public override async Task<PagedResultDto<BookDto>> GetListAsync(GetBookListInput input)
    {
        var query = (await Repository.GetQueryableAsync())
            .WhereIf(!input.Filter.IsNullOrWhiteSpace(),
                x => x.Title.Contains(input.Filter) || x.Description.Contains(input.Filter))
            .WhereIf(input.AuthorId.HasValue,
                x => x.AuthorId == input.AuthorId);

        var totalCount = await AsyncExecuter.CountAsync(query);

        query = query
            .OrderBy(x => x.Title)
            .PageBy(input.SkipCount, input.MaxResultCount);

        var items = await AsyncExecuter.ToListAsync(query);
        var dtos = items.Select(x => new BookDto
        {
            Id = x.Id,
            Title = x.Title,
            Description = x.Description,
            PublishDate = x.PublishDate,
            AuthorId = x.AuthorId,
            AuthorName = x.Author?.Name,
            ReviewCount = x.Reviews?.Count ?? 0,
            AverageRating = x.Reviews != null && x.Reviews.Any() ? Math.Round(x.Reviews.Average(r => r.Rating), 1) : 0
        }).ToList();

        return new PagedResultDto<BookDto>(totalCount, dtos);
    }

    public override async Task<BookDto> GetAsync(Guid id)
    {
        var entity = await Repository.GetAsync(id);

        return new BookDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Description = entity.Description,
            PublishDate = entity.PublishDate,
            AuthorId = entity.AuthorId,
            AuthorName = entity.Author?.Name,
            ReviewCount = entity.Reviews?.Count ?? 0,
            AverageRating = entity.Reviews != null && entity.Reviews.Any() ? Math.Round(entity.Reviews.Average(r => r.Rating), 1) : 0
        };
    }

    public override async Task<BookDto> CreateAsync(CreateUpdateBookDto input)
    {
        // Validate author exists
        var author = await _authorRepository.FindAsync(input.AuthorId);
        if (author == null)
        {
            throw new AbpValidationException("Author not found");
        }

        var entity = new Book(GuidGenerator.Create(), input.Title, input.AuthorId)
        {
            Description = input.Description,
            PublishDate = input.PublishDate
        };

        var createdEntity = await Repository.InsertAsync(entity, true);

        return new BookDto
        {
            Id = createdEntity.Id,
            Title = createdEntity.Title,
            Description = createdEntity.Description,
            PublishDate = createdEntity.PublishDate,
            AuthorId = createdEntity.AuthorId,
            AuthorName = author.Name,
            ReviewCount = 0
        };
    }

    public override async Task<BookDto> UpdateAsync(Guid id, CreateUpdateBookDto input)
    {
        var entity = await Repository.GetAsync(id);

        // Validate author exists if changed
        if (entity.AuthorId != input.AuthorId)
        {
            var author = await _authorRepository.FindAsync(input.AuthorId);
            if (author == null)
            {
                throw new AbpValidationException("Author not found");
            }
        }

        entity.Title = input.Title;
        entity.Description = input.Description;
        entity.PublishDate = input.PublishDate;
        entity.AuthorId = input.AuthorId;

        var updatedEntity = await Repository.UpdateAsync(entity, true);

        var authorEntity = await _authorRepository.FindAsync(updatedEntity.AuthorId);

        return new BookDto
        {
            Id = updatedEntity.Id,
            Title = updatedEntity.Title,
            Description = updatedEntity.Description,
            PublishDate = updatedEntity.PublishDate,
            AuthorId = updatedEntity.AuthorId,
            AuthorName = authorEntity?.Name,
            ReviewCount = updatedEntity.Reviews?.Count ?? 0
        };
    }

    protected override string GetListPolicyName => BookReviewTracker4Permissions.Books.Default;
    protected override string GetPolicyName => BookReviewTracker4Permissions.Books.Default;
    protected override string CreatePolicyName => BookReviewTracker4Permissions.Books.Create;
    protected override string UpdatePolicyName => BookReviewTracker4Permissions.Books.Update;
    protected override string DeletePolicyName => BookReviewTracker4Permissions.Books.Delete;
}
