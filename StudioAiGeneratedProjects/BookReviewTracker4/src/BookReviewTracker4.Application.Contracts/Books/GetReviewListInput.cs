using System;
using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Books;

/// <summary>
/// Input DTO for listing reviews with pagination, sorting, and optional filtering by book.
/// </summary>
public class GetReviewListInput : PagedAndSortedResultRequestDto
{
    /// <summary>
    /// Gets or sets the optional book ID filter.
    /// </summary>
    public Guid? BookId { get; set; }

    /// <summary>
    /// Gets or sets the optional rating filter.
    /// </summary>
    public int? Rating { get; set; }
}
