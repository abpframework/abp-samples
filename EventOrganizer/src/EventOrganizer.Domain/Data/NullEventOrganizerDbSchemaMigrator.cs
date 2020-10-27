using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace EventOrganizer.Data
{
    /* This is used if database provider does't define
     * IEventOrganizerDbSchemaMigrator implementation.
     */
    public class NullEventOrganizerDbSchemaMigrator : IEventOrganizerDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}