using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace SignInWithoutSpecifyingTenant.EntityFrameworkCore
{
    public static class SignInWithoutSpecifyingTenantDbContextModelCreatingExtensions
    {
        public static void ConfigureSignInWithoutSpecifyingTenant(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(SignInWithoutSpecifyingTenantConsts.DbTablePrefix + "YourEntities", SignInWithoutSpecifyingTenantConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}