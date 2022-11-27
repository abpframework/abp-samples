using BookStore.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace BookStore;

[DependsOn(
    typeof(BookStoreEntityFrameworkCoreTestModule)
    )]
public class BookStoreDomainTestModule : AbpModule
{

}
