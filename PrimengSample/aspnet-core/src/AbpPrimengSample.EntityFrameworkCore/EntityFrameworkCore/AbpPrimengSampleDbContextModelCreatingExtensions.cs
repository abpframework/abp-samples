using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace AbpPrimengSample.EntityFrameworkCore
{
    public static class AbpPrimengSampleDbContextModelCreatingExtensions
    {
        public static void ConfigureAbpPrimengSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(AbpPrimengSampleConsts.DbTablePrefix + "YourEntities", AbpPrimengSampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}