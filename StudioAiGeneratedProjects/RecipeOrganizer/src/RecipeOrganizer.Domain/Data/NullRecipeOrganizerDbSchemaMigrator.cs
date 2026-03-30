using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace RecipeOrganizer.Data;

/* This is used if database provider does't define
 * IRecipeOrganizerDbSchemaMigrator implementation.
 */
public class NullRecipeOrganizerDbSchemaMigrator : IRecipeOrganizerDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
