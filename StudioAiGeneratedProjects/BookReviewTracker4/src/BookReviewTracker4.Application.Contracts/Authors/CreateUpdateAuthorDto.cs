using System.ComponentModel.DataAnnotations;

namespace BookReviewTracker4.Authors;

/// <summary>
/// DTO for creating or updating an author.
/// </summary>
public class CreateUpdateAuthorDto
{
    /// <summary>
    /// Gets or sets the author's name (required, max 256 characters).
    /// </summary>
    [Required(ErrorMessage = "Author name is required")]
    [StringLength(256, MinimumLength = 1, ErrorMessage = "Author name must be between 1 and 256 characters")]
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the author's biography (optional, max 2000 characters).
    /// </summary>
    [StringLength(2000, ErrorMessage = "Biography must be less than 2000 characters")]
    public string Bio { get; set; }
}
