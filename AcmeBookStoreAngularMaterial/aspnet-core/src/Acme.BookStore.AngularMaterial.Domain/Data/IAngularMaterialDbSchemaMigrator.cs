using System.Threading.Tasks;

namespace Acme.BookStore.AngularMaterial.Data
{
    public interface IAngularMaterialDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
