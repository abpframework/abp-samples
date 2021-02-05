using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace CustomAngularAppWithIdentityServer.EntityFrameworkCore
{
    public static class CustomAngularAppWithIdentityServerDbContextModelCreatingExtensions
    {
        public static void ConfigureCustomAngularAppWithIdentityServer(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(CustomAngularAppWithIdentityServerConsts.DbTablePrefix + "YourEntities", CustomAngularAppWithIdentityServerConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}