using System.Threading.Tasks;

namespace MovieCollectionApp.Data;

public interface IMovieCollectionAppDbSchemaMigrator
{
    Task MigrateAsync();
}
