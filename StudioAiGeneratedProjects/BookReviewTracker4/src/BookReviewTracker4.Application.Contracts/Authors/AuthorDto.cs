using System;
using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Authors;

/// <summary>
/// DTO for displaying author information.
/// </summary>
public class AuthorDto : EntityDto<Guid>
{
    /// <summary>
    /// Gets or sets the author's name.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// Gets or sets the author's biography.
    /// </summary>
    public string Bio { get; set; }

    /// <summary>
    /// Gets or sets the number of books by this author.
    /// </summary>
    public int BookCount { get; set; }
}
