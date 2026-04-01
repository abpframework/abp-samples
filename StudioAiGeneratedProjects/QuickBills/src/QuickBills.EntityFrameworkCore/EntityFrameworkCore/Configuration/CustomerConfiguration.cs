using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBills.Invoicing;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace QuickBills.EntityFrameworkCore.Configuration;

/// <summary>
/// EF Core configuration for the Customer entity.
/// </summary>
public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
{
    public void Configure(EntityTypeBuilder<Customer> builder)
    {
        // Table and schema configuration
        builder.ToTable(QuickBillsConsts.DbTablePrefix + "Customers", QuickBillsConsts.DbSchema);

        // Apply ABP conventions (audit properties, concurrency token, soft delete, etc.)
        builder.ConfigureByConvention();

        // Configure properties
        builder.Property(c => c.Name)
            .IsRequired()
            .HasMaxLength(256);

        builder.Property(c => c.Email)
            .IsRequired()
            .HasMaxLength(256);

        builder.Property(c => c.Phone)
            .HasMaxLength(20);

        builder.Property(c => c.Address)
            .HasMaxLength(500);

        builder.Property(c => c.City)
            .HasMaxLength(100);

        builder.Property(c => c.Country)
            .HasMaxLength(100);

        // Configure relationships
        builder.HasMany(c => c.Invoices)
            .WithOne(i => i.Customer)
            .HasForeignKey(i => i.CustomerId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        // Indexes
        // Note: Email is globally unique. If Customer becomes IMultiTenant in future,
        // change to: builder.HasIndex(c => new { c.TenantId, c.Email }).IsUnique();
        builder.HasIndex(c => c.Email).IsUnique();
    }
}
