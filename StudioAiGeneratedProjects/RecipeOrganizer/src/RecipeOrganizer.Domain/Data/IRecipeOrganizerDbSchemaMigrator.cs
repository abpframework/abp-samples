using System.Threading.Tasks;

namespace RecipeOrganizer.Data;

public interface IRecipeOrganizerDbSchemaMigrator
{
    Task MigrateAsync();
}
