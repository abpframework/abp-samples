using System.Threading.Tasks;

namespace AngularMaterialUIDemo.Data
{
    public interface IAngularMaterialUIDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
