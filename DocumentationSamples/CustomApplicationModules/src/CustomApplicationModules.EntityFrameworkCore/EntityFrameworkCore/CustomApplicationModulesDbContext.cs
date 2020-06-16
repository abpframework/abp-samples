using System;
using CustomApplicationModules.Organizations;
using Microsoft.EntityFrameworkCore;
using CustomApplicationModules.Users;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using Volo.Abp.Users.EntityFrameworkCore;

namespace CustomApplicationModules.EntityFrameworkCore
{
    /* This is your actual DbContext used on runtime.
     * It includes only your entities.
     * It does not include entities of the used modules, because each module has already
     * its own DbContext class. If you want to share some database tables with the used modules,
     * just create a structure like done for AppUser.
     *
     * Don't use this DbContext for database migrations since it does not contain tables of the
     * used modules (as explained above). See CustomApplicationModulesMigrationsDbContext for migrations.
     */
    [ConnectionStringName("Default")]
    public class CustomApplicationModulesDbContext : AbpDbContext<CustomApplicationModulesDbContext>
    {
        public DbSet<AppUser> Users { get; set; }

        public DbSet<Test> Tests { get; set; }

        public DbSet<Organization> Organizations { get; set; }

        /* Add DbSet properties for your Aggregate Roots / Entities here.
         * Also map them inside CustomApplicationModulesDbContextModelCreatingExtensions.ConfigureCustomApplicationModules
         */

        public CustomApplicationModulesDbContext(DbContextOptions<CustomApplicationModulesDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Configure the shared tables (with included modules) here */

            builder.Entity<AppUser>(b =>
            {
                b.ToTable(AbpIdentityDbProperties.DbTablePrefix + "Users"); //Sharing the same table "AbpUsers" with the IdentityUser
                
                b.ConfigureByConvention();
                b.ConfigureAbpUser();

                /* Configure mappings for your additional properties
                 * Also see the CustomApplicationModulesEfCoreEntityExtensionMappings class
                 */

                b.Property<Guid?>(nameof(AppUser.OrganizationId));
                b.HasOne<Organization>().WithMany().HasForeignKey(nameof(AppUser.OrganizationId));
            });

            /* Configure your own tables/entities inside the ConfigureCustomApplicationModules method */

            builder.ConfigureCustomApplicationModules();

            builder.Entity<Test>(b =>
            {
                //SET RELATIONS FOR THE PROJECT DBCONTEXT

                b.HasOne(x => x.Creator).WithMany().HasForeignKey("CreatorId").IsRequired(false);
                b.HasOne(x => x.LastModifier).WithMany().HasForeignKey("LastModifierUserId").IsRequired(false);
                b.HasOne(x => x.Deleter).WithMany().HasForeignKey("DeleterUserId").IsRequired(false);
            });
        }
    }
}
