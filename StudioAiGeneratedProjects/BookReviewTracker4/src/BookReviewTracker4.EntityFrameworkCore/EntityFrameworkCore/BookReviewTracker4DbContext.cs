using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using BookReviewTracker4.Authors;
using BookReviewTracker4.Books;

namespace BookReviewTracker4.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class BookReviewTracker4DbContext :
    AbpDbContext<BookReviewTracker4DbContext>,
    ITenantManagementDbContext,
    IIdentityDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */

    /// <summary>
    /// Gets or sets the Authors DbSet.
    /// </summary>
    public DbSet<Author> Authors { get; set; }

    /// <summary>
    /// Gets or sets the Books DbSet.
    /// </summary>
    public DbSet<Book> Books { get; set; }

    /// <summary>
    /// Gets or sets the Reviews DbSet.
    /// </summary>
    public DbSet<Review> Reviews { get; set; }


    #region Entities from the modules

    /* Notice: We only implemented IIdentityProDbContext and ISaasDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityProDbContext and ISaasDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    // Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }
    public DbSet<IdentitySession> Sessions { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    public BookReviewTracker4DbContext(DbContextOptions<BookReviewTracker4DbContext> options)
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
        builder.ConfigureFeatureManagement();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureTenantManagement();
        builder.ConfigureBlobStoring();
        
        /* Configure your own tables/entities inside here */

        /* Author Configuration */
        builder.Entity<Author>(b =>
        {
            b.ToTable(BookReviewTracker4Consts.DbTablePrefix + "Authors", BookReviewTracker4Consts.DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(256);
            
            b.Property(x => x.Bio)
                .HasMaxLength(2000);

            b.HasMany(x => x.Books)
                .WithOne(x => x.Author)
                .HasForeignKey(x => x.AuthorId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        /* Book Configuration */
        builder.Entity<Book>(b =>
        {
            b.ToTable(BookReviewTracker4Consts.DbTablePrefix + "Books", BookReviewTracker4Consts.DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.Title)
                .IsRequired()
                .HasMaxLength(512);
            
            b.Property(x => x.Description)
                .HasMaxLength(4000);

            b.Property(x => x.AuthorId)
                .IsRequired();

            b.HasOne(x => x.Author)
                .WithMany(x => x.Books)
                .HasForeignKey(x => x.AuthorId)
                .OnDelete(DeleteBehavior.Cascade);

            b.HasMany(x => x.Reviews)
                .WithOne(x => x.Book)
                .HasForeignKey(x => x.BookId)
                .OnDelete(DeleteBehavior.Cascade);

            b.HasIndex(x => x.AuthorId).HasDatabaseName("IX_" + BookReviewTracker4Consts.DbTablePrefix + "Books_AuthorId");
        });

        /* Review Configuration */
        builder.Entity<Review>(b =>
        {
            b.ToTable(BookReviewTracker4Consts.DbTablePrefix + "Reviews", BookReviewTracker4Consts.DbSchema);
            b.ConfigureByConvention();
            
            b.Property(x => x.BookId)
                .IsRequired();

            b.Property(x => x.Rating)
                .IsRequired();

            b.Property(x => x.Comment)
                .HasMaxLength(2000);

            b.Property(x => x.ReviewDate)
                .IsRequired();

            b.HasOne(x => x.Book)
                .WithMany(x => x.Reviews)
                .HasForeignKey(x => x.BookId)
                .OnDelete(DeleteBehavior.Cascade);

            b.HasIndex(x => x.BookId).HasDatabaseName("IX_" + BookReviewTracker4Consts.DbTablePrefix + "Reviews_BookId");
        });
    }
}
