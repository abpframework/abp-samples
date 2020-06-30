using System.Threading.Tasks;

namespace OrganizationUnitSample.Data
{
    public interface IOrganizationUnitSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
