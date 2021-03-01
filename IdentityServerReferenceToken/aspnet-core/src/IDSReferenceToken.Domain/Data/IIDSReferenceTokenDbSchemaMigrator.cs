using System.Threading.Tasks;

namespace IDSReferenceToken.Data
{
    public interface IIDSReferenceTokenDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
