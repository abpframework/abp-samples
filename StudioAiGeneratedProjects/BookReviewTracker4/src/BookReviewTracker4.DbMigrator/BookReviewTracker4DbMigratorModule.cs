using BookReviewTracker4.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace BookReviewTracker4.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(BookReviewTracker4EntityFrameworkCoreModule),
    typeof(BookReviewTracker4ApplicationContractsModule)
)]
public class BookReviewTracker4DbMigratorModule : AbpModule
{
}
