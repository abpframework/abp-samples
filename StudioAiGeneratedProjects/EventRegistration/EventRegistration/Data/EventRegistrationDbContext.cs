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
using EventRegistration.Entities;

namespace EventRegistration.Data;

public class EventRegistrationDbContext : AbpDbContext<EventRegistrationDbContext>
{
    
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public DbSet<Event> Events { get; set; }
    public DbSet<Attendee> Attendees { get; set; }

    public EventRegistrationDbContext(DbContextOptions<EventRegistrationDbContext> options)
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

        builder.Entity<Event>(b =>
        {
            b.ToTable(DbTablePrefix + "Events", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.Title).IsRequired().HasMaxLength(EventConsts.MaxTitleLength);
            b.Property(x => x.Description).HasMaxLength(EventConsts.MaxDescriptionLength);
            b.Property(x => x.Location).IsRequired().HasMaxLength(EventConsts.MaxLocationLength);
            b.Property(x => x.Capacity).IsRequired();
            b.Property(x => x.IsCancelled).IsRequired().HasDefaultValue(false);

            b.HasMany(x => x.Attendees)
                .WithOne()
                .HasForeignKey(x => x.EventId)
                .IsRequired();

            b.Navigation(x => x.Attendees).UsePropertyAccessMode(PropertyAccessMode.Field);

            b.HasIndex(x => x.StartDate);
            b.HasIndex(x => x.Title);
        });

        builder.Entity<Attendee>(b =>
        {
            b.ToTable(DbTablePrefix + "Attendees", DbSchema);
            b.ConfigureByConvention();

            b.Property(x => x.FirstName).IsRequired().HasMaxLength(AttendeeConsts.MaxFirstNameLength);
            b.Property(x => x.LastName).IsRequired().HasMaxLength(AttendeeConsts.MaxLastNameLength);
            b.Property(x => x.Email).IsRequired().HasMaxLength(AttendeeConsts.MaxEmailLength);
            b.Property(x => x.PhoneNumber).HasMaxLength(AttendeeConsts.MaxPhoneNumberLength);

            b.HasIndex(x => new { x.EventId, x.Email });
        });
    }
}

