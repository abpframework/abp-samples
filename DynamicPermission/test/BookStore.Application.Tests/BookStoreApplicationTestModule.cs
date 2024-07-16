using Volo.Abp.Modularity;

namespace BookStore;

[DependsOn(
    typeof(BookStoreApplicationModule),
    typeof(BookStoreDomainTestModule)
)]
public class BookStoreApplicationTestModule : AbpModule
{

}
