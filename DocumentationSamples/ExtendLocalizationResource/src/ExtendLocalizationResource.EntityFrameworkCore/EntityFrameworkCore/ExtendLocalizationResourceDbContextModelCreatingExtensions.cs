using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace ExtendLocalizationResource.EntityFrameworkCore
{
    public static class ExtendLocalizationResourceDbContextModelCreatingExtensions
    {
        public static void ConfigureExtendLocalizationResource(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(ExtendLocalizationResourceConsts.DbTablePrefix + "YourEntities", ExtendLocalizationResourceConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}