using Volo.Abp.Application.Dtos;

namespace BookReviewTracker4.Authors;

/// <summary>
/// Input DTO for listing authors with pagination and sorting.
/// </summary>
public class GetAuthorListInput : PagedAndSortedResultRequestDto
{
    /// <summary>
    /// Gets or sets the filter text to search authors by name or bio.
    /// </summary>
    public string? Filter { get; set; }
}
