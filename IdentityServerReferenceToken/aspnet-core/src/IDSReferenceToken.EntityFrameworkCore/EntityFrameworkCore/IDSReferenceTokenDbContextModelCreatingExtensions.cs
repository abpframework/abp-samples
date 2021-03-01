using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace IDSReferenceToken.EntityFrameworkCore
{
    public static class IDSReferenceTokenDbContextModelCreatingExtensions
    {
        public static void ConfigureIDSReferenceToken(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(IDSReferenceTokenConsts.DbTablePrefix + "YourEntities", IDSReferenceTokenConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}