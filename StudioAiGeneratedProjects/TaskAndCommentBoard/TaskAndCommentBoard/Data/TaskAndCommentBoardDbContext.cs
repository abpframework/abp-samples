using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using TaskAndCommentBoard.Entities.Books;
using TaskAndCommentBoard.Entities.Tasks;

namespace TaskAndCommentBoard.Data;

public class TaskAndCommentBoardDbContext : AbpDbContext<TaskAndCommentBoardDbContext>
{
    public DbSet<Book> Books { get; set; }
    public DbSet<TaskItem> Tasks { get; set; }
    public DbSet<TaskComment> TaskComments { get; set; }
    
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public TaskAndCommentBoardDbContext(DbContextOptions<TaskAndCommentBoardDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureFeatureManagement();
        builder.ConfigurePermissionManagement();
        builder.ConfigureBlobStoring();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureTenantManagement();
        
        builder.Entity<Book>(b =>
        {
            b.ToTable(DbTablePrefix + "Books",
                DbSchema);
            b.ConfigureByConvention(); //auto configure for the base class props
            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
        });

        builder.Entity<TaskItem>(b =>
        {
            b.ToTable(DbTablePrefix + "Tasks", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Title).IsRequired().HasMaxLength(128);
            b.Property(x => x.Description).IsRequired().HasMaxLength(2000);
            b.HasMany(x => x.Comments)
                .WithOne()
                .HasForeignKey(x => x.TaskId)
                .OnDelete(DeleteBehavior.Cascade);
        });

        builder.Entity<TaskComment>(b =>
        {
            b.ToTable(DbTablePrefix + "TaskComments", DbSchema);
            b.ConfigureByConvention();
            b.Property(x => x.Content).IsRequired().HasMaxLength(2000);
        });
        
        /* Configure your own entities here */
    }
}

