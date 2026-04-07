using System;
using System.ComponentModel.DataAnnotations;

namespace BookReviewTracker4.Books;

/// <summary>
/// DTO for creating or updating a review.
/// </summary>
public class CreateUpdateReviewDto
{
    /// <summary>
    /// Gets or sets the book's ID (required).
    /// </summary>
    [Required(ErrorMessage = "Book is required")]
    public Guid BookId { get; set; }

    /// <summary>
    /// Gets or sets the review rating (required, 1-5).
    /// </summary>
    [Required(ErrorMessage = "Rating is required")]
    [Range(1, 5, ErrorMessage = "Rating must be between 1 and 5")]
    public int Rating { get; set; }

    /// <summary>
    /// Gets or sets the review comment (optional, max 2000 characters).
    /// </summary>
    [StringLength(2000, ErrorMessage = "Comment must be less than 2000 characters")]
    public string Comment { get; set; }

    /// <summary>
    /// Gets or sets the review date (optional, defaults to now).
    /// </summary>
    public DateTime? ReviewDate { get; set; }
}
