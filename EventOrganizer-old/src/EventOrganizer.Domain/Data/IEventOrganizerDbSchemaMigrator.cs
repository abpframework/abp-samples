using System.Threading.Tasks;

namespace EventOrganizer.Data
{
    public interface IEventOrganizerDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
