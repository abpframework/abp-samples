using Volo.Abp.Modularity;

namespace BookStore;

[DependsOn(
    typeof(BookStoreDomainModule),
    typeof(BookStoreTestBaseModule)
)]
public class BookStoreDomainTestModule : AbpModule
{

}
