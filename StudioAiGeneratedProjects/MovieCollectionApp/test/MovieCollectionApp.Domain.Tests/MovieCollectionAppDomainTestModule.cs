using Volo.Abp.Modularity;

namespace MovieCollectionApp;

[DependsOn(
    typeof(MovieCollectionAppDomainModule),
    typeof(MovieCollectionAppTestBaseModule)
)]
public class MovieCollectionAppDomainTestModule : AbpModule
{

}
