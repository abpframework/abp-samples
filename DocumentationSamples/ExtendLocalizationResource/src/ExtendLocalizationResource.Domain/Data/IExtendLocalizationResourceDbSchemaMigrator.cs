using System.Threading.Tasks;

namespace ExtendLocalizationResource.Data
{
    public interface IExtendLocalizationResourceDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
