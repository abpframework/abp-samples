using System;
using CustomApplicationModules.Organizations;
using CustomApplicationModules.Users;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace CustomApplicationModules.EntityFrameworkCore
{
    /* This DbContext is only used for database migrations.
     * It is not used on runtime. See CustomApplicationModulesDbContext for the runtime DbContext.
     * It is a unified model that includes configuration for
     * all used modules and your application.
     */
    public class CustomApplicationModulesMigrationsDbContext : AbpDbContext<CustomApplicationModulesMigrationsDbContext>
    {
        public CustomApplicationModulesMigrationsDbContext(DbContextOptions<CustomApplicationModulesMigrationsDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Include modules to your migration db context */

            builder.ConfigurePermissionManagement();
            builder.ConfigureSettingManagement();
            builder.ConfigureBackgroundJobs();
            builder.ConfigureAuditLogging();
            builder.ConfigureIdentity();
            builder.ConfigureIdentityServer();
            builder.ConfigureFeatureManagement();
            builder.ConfigureTenantManagement();

            //IGNORE AppUser related properties

            builder.Entity<Test>(b =>
            {
                b.Ignore(x => x.Creator);
                b.Ignore(x => x.LastModifier);
                b.Ignore(x => x.Deleter);

                b.HasOne<IdentityUser>().WithMany().HasForeignKey("CreatorId").IsRequired(false);
                b.HasOne<IdentityUser>().WithMany().HasForeignKey("LastModifierUserId").IsRequired(false);
                b.HasOne<IdentityUser>().WithMany().HasForeignKey("DeleterUserId").IsRequired(false);
            });

            builder.Entity<IdentityUser>(b =>
            {
                b.Property<Guid?>(nameof(AppUser.OrganizationId));
                b.HasOne<Organization>().WithMany().HasForeignKey(nameof(AppUser.OrganizationId));
            });
            /* Configure your own tables/entities inside the ConfigureCustomApplicationModules method */

            builder.ConfigureCustomApplicationModules();
        }
    }
}
