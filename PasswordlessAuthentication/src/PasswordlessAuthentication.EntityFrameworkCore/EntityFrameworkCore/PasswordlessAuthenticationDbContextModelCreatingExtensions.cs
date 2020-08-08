using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace PasswordlessAuthentication.EntityFrameworkCore
{
    public static class PasswordlessAuthenticationDbContextModelCreatingExtensions
    {
        public static void ConfigurePasswordlessAuthentication(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(PasswordlessAuthenticationConsts.DbTablePrefix + "YourEntities", PasswordlessAuthenticationConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}