using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace DevExtreme.Sample.EntityFrameworkCore
{
    public static class SampleDbContextModelCreatingExtensions
    {
        public static void ConfigureSample(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(SampleConsts.DbTablePrefix + "YourEntities", SampleConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}