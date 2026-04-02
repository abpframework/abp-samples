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
using GymWorkoutPlanner.Entities.Books;
using GymWorkoutPlanner.Entities.Exercises;
using GymWorkoutPlanner.Entities.WorkoutPlans;

namespace GymWorkoutPlanner.Data;

public class GymWorkoutPlannerDbContext : AbpDbContext<GymWorkoutPlannerDbContext>
{
    public DbSet<Book> Books { get; set; }
    public DbSet<Exercise> Exercises { get; set; }
    public DbSet<WorkoutPlan> WorkoutPlans { get; set; }
    public DbSet<WorkoutPlanExercise> WorkoutPlanExercises { get; set; }
    
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public GymWorkoutPlannerDbContext(DbContextOptions<GymWorkoutPlannerDbContext> options)
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

        builder.Entity<Exercise>(b =>
        {
            b.ToTable(DbTablePrefix + "Exercises", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
            b.Property(x => x.TargetMuscleGroup).IsRequired().HasMaxLength(64);
            b.Property(x => x.Description).HasMaxLength(1024);
        });

        builder.Entity<WorkoutPlan>(b =>
        {
            b.ToTable(DbTablePrefix + "WorkoutPlans", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.Name).IsRequired().HasMaxLength(128);
            b.Property(x => x.Description).HasMaxLength(2048);
        });

        builder.Entity<WorkoutPlanExercise>(b =>
        {
            b.ToTable(DbTablePrefix + "WorkoutPlanExercises", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.Order).IsRequired();
            b.Property(x => x.Sets).IsRequired();
            b.Property(x => x.Repetitions).IsRequired();
            b.Property(x => x.RestSeconds).IsRequired();
            b.Property(x => x.Notes).HasMaxLength(1024);

            b.HasOne<WorkoutPlan>()
                .WithMany()
                .HasForeignKey(x => x.WorkoutPlanId)
                .OnDelete(DeleteBehavior.Cascade);

            b.HasOne<Exercise>()
                .WithMany()
                .HasForeignKey(x => x.ExerciseId)
                .OnDelete(DeleteBehavior.Restrict);

            b.HasIndex(x => new { x.WorkoutPlanId, x.Order });
            b.HasIndex(x => new { x.WorkoutPlanId, x.ExerciseId, x.Order }).IsUnique();
        });
        
        /* Configure your own entities here */
    }
}

