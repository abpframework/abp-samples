using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace TemplateReplace.EntityFrameworkCore
{
    public static class TemplateReplaceDbContextModelCreatingExtensions
    {
        public static void ConfigureTemplateReplace(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(TemplateReplaceConsts.DbTablePrefix + "YourEntities", TemplateReplaceConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}