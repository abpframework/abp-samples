using System;
using System.Collections.Generic;
using BookReviewTracker4.Books;
using Volo.Abp.Domain.Entities.Auditing;

namespace BookReviewTracker4.Authors;

/// <summary>
/// Represents an author entity in the Book Review Tracker system.
/// </summary>
public class Author : FullAuditedAggregateRoot<Guid>
{
    /// <summary>
    /// Gets or sets the author's name.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the author's biography (optional).
    /// </summary>
    public string Bio { get; set; }

    /// <summary>
    /// Gets or sets the collection of books written by this author.
    /// </summary>
    public ICollection<Book> Books { get; set; } = new List<Book>();

    /// <summary>
    /// Initializes a new instance of the <see cref="Author"/> class.
    /// </summary>
    public Author()
    {
    }

    /// <summary>
    /// Initializes a new instance of the <see cref="Author"/> class with the specified ID and name.
    /// </summary>
    /// <param name="id">The unique identifier for the author.</param>
    /// <param name="name">The author's name.</param>
    public Author(Guid id, string name) : base(id)
    {
        Name = name;
    }
}
