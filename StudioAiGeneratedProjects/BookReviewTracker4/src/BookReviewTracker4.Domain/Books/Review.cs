using System;
using Volo.Abp.Domain.Entities.Auditing;

namespace BookReviewTracker4.Books;

/// <summary>
/// Represents a review entity for a book in the Book Review Tracker system.
/// </summary>
public class Review : FullAuditedEntity<Guid>
{
    /// <summary>
    /// Gets or sets the foreign key to the Book.
    /// </summary>
    public Guid BookId { get; set; }

    /// <summary>
    /// Gets or sets the book being reviewed (navigation property).
    /// </summary>
    public Book Book { get; set; }

    /// <summary>
    /// Gets or sets the rating of the book (1-5).
    /// </summary>
    public int Rating { get; set; }

    /// <summary>
    /// Gets or sets the review comment or text.
    /// </summary>
    public string Comment { get; set; }

    /// <summary>
    /// Gets or sets the date when the review was created.
    /// </summary>
    public DateTime ReviewDate { get; set; }

    /// <summary>
    /// Initializes a new instance of the <see cref="Review"/> class.
    /// </summary>
    public Review()
    {
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="Review"/> class with the specified ID and book ID.
    /// </summary>
    /// <param name="id">The unique identifier for the review.</param>
    /// <param name="bookId">The book's unique identifier.</param>
    public Review(Guid id, Guid bookId) : base(id)
    {
        BookId = bookId;
    }
}
