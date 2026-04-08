using System;
using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Books;

/// <summary>
/// DTO for displaying review information with book details.
/// </summary>
public class ReviewDto : EntityDto<Guid>
{
    /// <summary>
    /// Gets or sets the book's ID.
    /// </summary>
    public Guid BookId { get; set; }

    /// <summary>
    /// Gets or sets the book's title.
    /// </summary>
    public string BookTitle { get; set; }

    /// <summary>
    /// Gets or sets the review rating (1-5).
    /// </summary>
    public int Rating { get; set; }

    /// <summary>
    /// Gets or sets the review comment or text.
    /// </summary>
    public string Comment { get; set; }

    /// <summary>
    /// Gets or sets the review creation date.
    /// </summary>
    public DateTime ReviewDate { get; set; }
}
