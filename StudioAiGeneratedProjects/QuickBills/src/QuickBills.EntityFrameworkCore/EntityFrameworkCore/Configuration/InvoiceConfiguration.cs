using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBills.Invoicing;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace QuickBills.EntityFrameworkCore.Configuration;

/// <summary>
/// EF Core configuration for the Invoice entity.
/// </summary>
public class InvoiceConfiguration : IEntityTypeConfiguration<Invoice>
{
    public void Configure(EntityTypeBuilder<Invoice> builder)
    {
        // Table and schema configuration
        builder.ToTable(QuickBillsConsts.DbTablePrefix + "Invoices", QuickBillsConsts.DbSchema);

        // Apply ABP conventions (audit properties, concurrency token, soft delete, etc.)
        builder.ConfigureByConvention();

        // Configure properties
        builder.Property(i => i.InvoiceNumber)
            .IsRequired()
            .HasMaxLength(50);

        builder.Property(i => i.Status)
            .HasConversion<int>();

        builder.Property(i => i.Notes)
            .HasMaxLength(2000);

        // Configure relationships
        builder.HasOne(i => i.Customer)
            .WithMany(c => c.Invoices)
            .HasForeignKey(i => i.CustomerId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany(i => i.Items)
            .WithOne()
            .HasForeignKey(item => item.InvoiceId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        // Indexes
        // Note: InvoiceNumber is globally unique. In multi-tenant systems, use composite index:
        // builder.HasIndex(i => new { i.TenantId, i.InvoiceNumber }).IsUnique();
        builder.HasIndex(i => i.InvoiceNumber).IsUnique();
        builder.HasIndex(i => i.CustomerId);
        builder.HasIndex(i => i.Status);
    }
}
