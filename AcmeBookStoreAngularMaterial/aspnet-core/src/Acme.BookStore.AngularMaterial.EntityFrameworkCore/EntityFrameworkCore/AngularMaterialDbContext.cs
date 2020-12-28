using Acme.BookStore.AngularMaterial.Authors;
using Acme.BookStore.AngularMaterial.Books;
using Microsoft.EntityFrameworkCore;
using Acme.BookStore.AngularMaterial.Users;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Identity;
using Volo.Abp.Users.EntityFrameworkCore;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    /* This is your actual DbContext used on runtime.
     * It includes only your entities.
     * It does not include entities of the used modules, because each module has already
     * its own DbContext class. If you want to share some database tables with the used modules,
     * just create a structure like done for AppUser.
     *
     * Don't use this DbContext for database migrations since it does not contain tables of the
     * used modules (as explained above). See AngularMaterialMigrationsDbContext for migrations.
     */
    [ConnectionStringName("Default")]
    public class AngularMaterialDbContext : AbpDbContext<AngularMaterialDbContext>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Author> Authors { get; set; }


        /* Add DbSet properties for your Aggregate Roots / Entities here.
         * Also map them inside AngularMaterialDbContextModelCreatingExtensions.ConfigureAngularMaterial
         */

        public AngularMaterialDbContext(DbContextOptions<AngularMaterialDbContext> options)
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
                 * Also see the AngularMaterialEfCoreEntityExtensionMappings class
                 */
            });

            /* Configure your own tables/entities inside the ConfigureAngularMaterial method */

            builder.ConfigureAngularMaterial();
        }
    }
}
