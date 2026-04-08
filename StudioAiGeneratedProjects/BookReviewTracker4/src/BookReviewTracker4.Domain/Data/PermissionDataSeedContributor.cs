using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.PermissionManagement;

namespace BookReviewTracker4.Data;

/// <summary>
/// Seeds all custom permissions to the admin role on application startup.
/// </summary>

public class PermissionDataSeedContributor : IDataSeedContributor, ITransientDependency
{
    private readonly IPermissionDataSeeder _permissionDataSeeder;

    public PermissionDataSeedContributor(IPermissionDataSeeder permissionDataSeeder)
    {
        _permissionDataSeeder = permissionDataSeeder;
    }

    public async Task SeedAsync(DataSeedContext context)
    {
        var permissions = new[]
        {
            "BookReviewTracker4.Authors.Default",
            "BookReviewTracker4.Authors.Create",
            "BookReviewTracker4.Authors.Update",
            "BookReviewTracker4.Authors.Delete",
            "BookReviewTracker4.Books.Default",
            "BookReviewTracker4.Books.Create",
            "BookReviewTracker4.Books.Update",
            "BookReviewTracker4.Books.Delete",
            "BookReviewTracker4.Reviews.Default",
            "BookReviewTracker4.Reviews.Create",
            "BookReviewTracker4.Reviews.Update",
            "BookReviewTracker4.Reviews.Delete",
        };

        await _permissionDataSeeder.SeedAsync(
            "R", // RolePermissionValueProvider.ProviderName
            "admin",
            permissions,
            context?.TenantId
        );
    }
}
