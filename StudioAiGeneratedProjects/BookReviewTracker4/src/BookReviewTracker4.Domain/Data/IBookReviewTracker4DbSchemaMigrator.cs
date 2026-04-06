using System.Threading.Tasks;

namespace BookReviewTracker4.Data;

public interface IBookReviewTracker4DbSchemaMigrator
{
    Task MigrateAsync();
}
