using System.Threading.Tasks;

namespace SocialGallery.Data
{
    public interface ISocialGalleryDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
