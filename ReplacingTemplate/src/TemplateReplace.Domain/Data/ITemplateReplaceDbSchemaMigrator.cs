using System.Threading.Tasks;

namespace TemplateReplace.Data
{
    public interface ITemplateReplaceDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
