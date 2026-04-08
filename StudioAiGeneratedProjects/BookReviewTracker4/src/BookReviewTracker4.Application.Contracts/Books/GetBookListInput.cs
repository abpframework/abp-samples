using System;
using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Books;

/// <summary>
/// Input DTO for listing books with pagination, sorting, and optional filtering by author.
/// </summary>
public class GetBookListInput : PagedAndSortedResultRequestDto
{
    /// <summary>
    /// Gets or sets the filter text to search books by title or description.
    /// </summary>
    public string? Filter { get; set; }

    /// <summary>
    /// Gets or sets the optional author ID filter.
    /// </summary>
    public Guid? AuthorId { get; set; }
}
