using Volo.Abp.Modularity;

namespace MovieCollectionApp;

[DependsOn(
    typeof(MovieCollectionAppApplicationModule),
    typeof(MovieCollectionAppDomainTestModule)
)]
public class MovieCollectionAppApplicationTestModule : AbpModule
{

}
