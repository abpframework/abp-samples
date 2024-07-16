using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Options;
using Volo.Abp.Caching;
using Volo.Abp.MultiTenancy;
using Volo.Abp.PermissionManagement;

namespace BookStore.Web.Pages;

public class IndexModel : BookStorePageModel
{
    protected IPermissionGroupDefinitionRecordRepository PermissionGroupRepository { get; }
    protected IPermissionDefinitionRecordRepository PermissionRepository { get; }
    protected IDistributedCache DistributedCache { get; }
    protected DynamicPermissionDefinitionStore DynamicPermissionDefinitionStore { get; }
    protected AbpDistributedCacheOptions CacheOptions { get; }

    public IndexModel(
        IPermissionGroupDefinitionRecordRepository permissionGroupRepository,
        IPermissionDefinitionRecordRepository permissionRepository,
        IDistributedCache distributedCache,
        DynamicPermissionDefinitionStore dynamicPermissionDefinitionStore,
        IOptions<AbpDistributedCacheOptions> cacheOptions)
    {
        PermissionGroupRepository = permissionGroupRepository;
        PermissionRepository = permissionRepository;
        DistributedCache = distributedCache;
        DynamicPermissionDefinitionStore = dynamicPermissionDefinitionStore;
        CacheOptions = cacheOptions.Value;
    }

    public virtual async Task OnGetAsync()
    {
        var groupName = "TestPermissionGroup";
        var testPermissionGroup = new PermissionGroupDefinitionRecord
        {
            Name = groupName,
            DisplayName = groupName
        };
        var group = await PermissionGroupRepository.GetListAsync();
        if (group.All(x => x.Name != groupName))
        {
            await PermissionGroupRepository.InsertAsync(testPermissionGroup);

            var permissions = await PermissionRepository.GetListAsync();
            var permissionName = "TestPermission";
            if (permissions.All(x => x.Name != permissionName))
            {
                var testPermission = new PermissionDefinitionRecord
                {
                    Name = permissionName,
                    DisplayName = permissionName,
                    GroupName = groupName,
                    IsEnabled = true,
                    MultiTenancySide = MultiTenancySides.Both
                };
                await PermissionRepository.InsertAsync(testPermission);

                await DistributedCache.RemoveAsync($"{CacheOptions.KeyPrefix}_AbpInMemoryPermissionCacheStamp");
            }
        }
    }
}
