using System;
using System.Linq;
using System.Threading.Tasks;
using BookReviewTracker4.Books;
using BookReviewTracker4.Permissions;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Validation;

namespace BookReviewTracker4.Books;

/// <summary>
/// Application service for managing book reviews.
/// </summary>
public class ReviewAppService : CrudAppService<
    Review,
    ReviewDto,
    Guid,
    GetReviewListInput,
    CreateUpdateReviewDto,
    CreateUpdateReviewDto>
{
    private readonly IRepository<Book, Guid> _bookRepository;

    public ReviewAppService(
        IRepository<Review, Guid> repository,
        IRepository<Book, Guid> bookRepository)
        : base(repository)
    {
        _bookRepository = bookRepository;
    }

    public override async Task<PagedResultDto<ReviewDto>> GetListAsync(GetReviewListInput input)
    {
        var query = (await Repository.GetQueryableAsync())
            .WhereIf(input.BookId.HasValue,
                x => x.BookId == input.BookId)
            .WhereIf(input.Rating.HasValue,
                x => x.Rating == input.Rating);

        var totalCount = await AsyncExecuter.CountAsync(query);

        query = query
            .OrderByDescending(x => x.ReviewDate)
            .PageBy(input.SkipCount, input.MaxResultCount);

        var items = await AsyncExecuter.ToListAsync(query);
        var dtos = items.Select(x => new ReviewDto
        {
            Id = x.Id,
            BookId = x.BookId,
            BookTitle = x.Book?.Title,
            Rating = x.Rating,
            Comment = x.Comment,
            ReviewDate = x.ReviewDate
        }).ToList();

        return new PagedResultDto<ReviewDto>(totalCount, dtos);
    }

    public override async Task<ReviewDto> GetAsync(Guid id)
    {
        var entity = await Repository.GetAsync(id);

        return new ReviewDto
        {
            Id = entity.Id,
            BookId = entity.BookId,
            BookTitle = entity.Book?.Title,
            Rating = entity.Rating,
            Comment = entity.Comment,
            ReviewDate = entity.ReviewDate
        };
    }

    public override async Task<ReviewDto> CreateAsync(CreateUpdateReviewDto input)
    {
        // Validate book exists
        var book = await _bookRepository.FindAsync(input.BookId);
        if (book == null)
        {
            throw new AbpValidationException("Book not found");
        }

        // Validate rating
        if (input.Rating < 1 || input.Rating > 5)
        {
            throw new AbpValidationException("Rating must be between 1 and 5");
        }

        var entity = new Review(GuidGenerator.Create(), input.BookId)
        {
            Rating = input.Rating,
            Comment = input.Comment,
            ReviewDate = input.ReviewDate ?? DateTime.UtcNow
        };

        var createdEntity = await Repository.InsertAsync(entity, true);

        return new ReviewDto
        {
            Id = createdEntity.Id,
            BookId = createdEntity.BookId,
            BookTitle = book.Title,
            Rating = createdEntity.Rating,
            Comment = createdEntity.Comment,
            ReviewDate = createdEntity.ReviewDate
        };
    }

    public override async Task<ReviewDto> UpdateAsync(Guid id, CreateUpdateReviewDto input)
    {
        var entity = await Repository.GetAsync(id);

        // Validate book exists if changed
        if (entity.BookId != input.BookId)
        {
            var book = await _bookRepository.FindAsync(input.BookId);
            if (book == null)
            {
                throw new AbpValidationException("Book not found");
            }
        }

        // Validate rating
        if (input.Rating < 1 || input.Rating > 5)
        {
            throw new AbpValidationException("Rating must be between 1 and 5");
        }

        entity.BookId = input.BookId;
        entity.Rating = input.Rating;
        entity.Comment = input.Comment;
        entity.ReviewDate = input.ReviewDate ?? entity.ReviewDate;

        var updatedEntity = await Repository.UpdateAsync(entity, true);

        var bookEntity = await _bookRepository.FindAsync(updatedEntity.BookId);

        return new ReviewDto
        {
            Id = updatedEntity.Id,
            BookId = updatedEntity.BookId,
            BookTitle = bookEntity?.Title,
            Rating = updatedEntity.Rating,
            Comment = updatedEntity.Comment,
            ReviewDate = updatedEntity.ReviewDate
        };
    }

    protected override string GetListPolicyName => BookReviewTracker4Permissions.Reviews.Default;
    protected override string GetPolicyName => BookReviewTracker4Permissions.Reviews.Default;
    protected override string CreatePolicyName => BookReviewTracker4Permissions.Reviews.Create;
    protected override string UpdatePolicyName => BookReviewTracker4Permissions.Reviews.Update;
    protected override string DeletePolicyName => BookReviewTracker4Permissions.Reviews.Delete;
}
