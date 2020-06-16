using System;
using CustomApplicationModules.Organizations;
using CustomApplicationModules.Users;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;

namespace CustomApplicationModules.EntityFrameworkCore
{
    public static class CustomApplicationModulesDbContextModelCreatingExtensions
    {
        public static void ConfigureCustomApplicationModules(this ModelBuilder builder)
        {
            Check.NotNull(builder, nameof(builder));

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(CustomApplicationModulesConsts.DbTablePrefix + "YourEntities", CustomApplicationModulesConsts.DbSchema);

            //    //...
            //});

            builder.Entity<Organization>(b =>
            {
                b.ToTable(CustomApplicationModulesConsts.DbTablePrefix + "Organizations", CustomApplicationModulesConsts.DbSchema);
                b.ConfigureFullAuditedAggregateRoot();
                b.ConfigureByConvention();
            });

            builder.Entity<Test>(b =>
            {
                b.ToTable("Tests");

                b.ConfigureByConvention();

                b.Property(x => x.Name).IsRequired(false).HasMaxLength(200);
            });
        }
    }
}
