using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace CustomNgAppWithIdentityServer.EntityFrameworkCore
{
    public static class CustomNgAppWithIdentityServerDbContextModelCreatingExtensions
    {
        public static void ConfigureCustomNgAppWithIdentityServer(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(CustomNgAppWithIdentityServerConsts.DbTablePrefix + "YourEntities", CustomNgAppWithIdentityServerConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}