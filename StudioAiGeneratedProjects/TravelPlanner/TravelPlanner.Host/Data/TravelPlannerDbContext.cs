using Microsoft.EntityFrameworkCore;
using TravelPlanner.Entities;
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

namespace TravelPlanner.Data;

public class TravelPlannerDbContext : AbpDbContext<TravelPlannerDbContext>
{
    
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public DbSet<Travel> Travels { get; set; }
    public DbSet<Transportation> Transportations { get; set; }

    public TravelPlannerDbContext(DbContextOptions<TravelPlannerDbContext> options)
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
        
        /* Configure your own entities here */

        builder.Entity<Travel>(b =>
        {
            b.ToTable(DbTablePrefix + "Travels", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.TripName)
                .IsRequired()
                .HasMaxLength(TravelConsts.MaxTripNameLength);

            b.Property(x => x.Destination)
                .HasMaxLength(TravelConsts.MaxDestinationLength);

            b.Property(x => x.Notes)
                .HasMaxLength(TravelConsts.MaxNotesLength);

            b.Property(x => x.Status)
                .IsRequired()
                .HasDefaultValue(TravelStatus.Draft);

            b.HasMany(x => x.Transportations)
                .WithOne()
                .HasForeignKey(x => x.TravelId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);
        });

        builder.Entity<Transportation>(b =>
        {
            b.ToTable(DbTablePrefix + "Transportations", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.Type)
                .IsRequired();

            b.Property(x => x.DepartureTime)
                .IsRequired();

            b.Property(x => x.FromLocation)
                .HasMaxLength(TransportationConsts.MaxLocationLength);

            b.Property(x => x.ToLocation)
                .HasMaxLength(TransportationConsts.MaxLocationLength);

            b.Property(x => x.CompanyName)
                .HasMaxLength(TransportationConsts.MaxCompanyNameLength);

            b.Property(x => x.TicketNumber)
                .HasMaxLength(TransportationConsts.MaxTicketNumberLength);

            b.Property(x => x.Notes)
                .HasMaxLength(TransportationConsts.MaxNotesLength);
        });
    }
}

