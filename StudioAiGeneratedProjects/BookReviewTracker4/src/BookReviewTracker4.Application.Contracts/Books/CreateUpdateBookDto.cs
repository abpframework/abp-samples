using System;
using System.ComponentModel.DataAnnotations;

namespace BookReviewTracker4.Books;

/// <summary>
/// DTO for creating or updating a book.
/// </summary>
public class CreateUpdateBookDto
{
    /// <summary>
    /// Gets or sets the book's title (required, max 512 characters).
    /// </summary>
    [Required(ErrorMessage = "Book title is required")]
    [StringLength(512, MinimumLength = 1, ErrorMessage = "Book title must be between 1 and 512 characters")]
    public string Title { get; set; }

    /// <summary>
    /// Gets or sets the book's description (optional, max 4000 characters).
    /// </summary>
    [StringLength(4000, ErrorMessage = "Book description must be less than 4000 characters")]
    public string Description { get; set; }

    /// <summary>
    /// Gets or sets the book's publication date (optional).
    /// </summary>
    public DateTime? PublishDate { get; set; }

    /// <summary>
    /// Gets or sets the author's ID (required).
    /// </summary>
    [Required(ErrorMessage = "Author is required")]
    public Guid AuthorId { get; set; }
}
