using System;
using System.Collections.Generic;
using BookReviewTracker4.Authors;
using Volo.Abp.Domain.Entities.Auditing;

namespace BookReviewTracker4.Books;

/// <summary>
/// Represents a book entity in the Book Review Tracker system.
/// </summary>
public class Book : FullAuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Gets or sets the book's title.
    /// </summary>
    public string Title { get; set; }

    /// <summary>
    /// Gets or sets the book's description (optional).
    /// </summary>
    public string Description { get; set; }

    /// <summary>
    /// Gets or sets the book's publication date.
    /// </summary>
    public DateTime? PublishDate { get; set; }

    /// <summary>
    /// Gets or sets the foreign key to the Author.
    /// </summary>
    public Guid AuthorId { get; set; }

    /// <summary>
    /// Gets or sets the author of this book (navigation property).
    /// </summary>
    public Author Author { get; set; }

    /// <summary>
    /// Gets or sets the collection of reviews for this book.
    /// </summary>
    public ICollection<Review> Reviews { get; set; } = new List<Review>();

    /// <summary>
    /// Initializes a new instance of the <see cref="Book"/> class.
    /// </summary>
    public Book()
    {
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="Book"/> class with the specified ID, title, and author ID.
    /// </summary>
    /// <param name="id">The unique identifier for the book.</param>
    /// <param name="title">The book's title.</param>
    /// <param name="authorId">The author's unique identifier.</param>
    public Book(Guid id, string title, Guid authorId) : base(id)
    {
        Title = title;
        AuthorId = authorId;
    }
}
