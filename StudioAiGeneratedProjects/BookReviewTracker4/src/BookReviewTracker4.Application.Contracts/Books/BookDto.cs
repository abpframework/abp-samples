using System;
using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Books;

/// <summary>
/// DTO for displaying book information with author details.
/// </summary>
public class BookDto : EntityDto<Guid>
{
    /// <summary>
    /// Gets or sets the book's title.
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    /// Gets or sets the book's description.
    /// </summary>
    public string Description { get; set; }

    /// <summary>
    /// Gets or sets the book's publication date.
    /// </summary>
    public DateTime? PublishDate { get; set; }

    /// <summary>
    /// Gets or sets the author's ID.
    /// </summary>
    public Guid AuthorId { get; set; }

    /// <summary>
    /// Gets or sets the author's name.
    /// </summary>
    public string AuthorName { get; set; }

    /// <summary>
    /// Gets or sets the review count for this book.
    /// </summary>
    public int ReviewCount { get; set; }

    /// <summary>
    /// Gets or sets the average rating for this book.
    /// </summary>
    public double AverageRating { get; set; }
}
