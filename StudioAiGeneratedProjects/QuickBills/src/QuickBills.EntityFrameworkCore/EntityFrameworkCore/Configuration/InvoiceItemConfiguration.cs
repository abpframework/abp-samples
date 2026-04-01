using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBills.Invoicing;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace QuickBills.EntityFrameworkCore.Configuration;

/// <summary>
/// EF Core configuration for the InvoiceItem entity.
/// </summary>
public class InvoiceItemConfiguration : IEntityTypeConfiguration<InvoiceItem>
{
    public void Configure(EntityTypeBuilder<InvoiceItem> builder)
    {
        // Table and schema configuration
        builder.ToTable(QuickBillsConsts.DbTablePrefix + "InvoiceItems", QuickBillsConsts.DbSchema);

        // Apply ABP conventions (concurrency token, soft delete, extra properties, etc.)
        builder.ConfigureByConvention();

        // Primary key
        builder.HasKey(item => item.Id);

        // Configure properties
        builder.Property(item => item.Description)
            .IsRequired()
            .HasMaxLength(500);

        builder.Property(item => item.Quantity)
            .HasPrecision(18, 4)
            .IsRequired();

        builder.Property(item => item.UnitPrice)
            .HasPrecision(18, 4)
            .IsRequired();

        // Configure relationships
        builder.HasOne<Invoice>()
            .WithMany(i => i.Items)
            .HasForeignKey(item => item.InvoiceId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        // Indexes
        builder.HasIndex(item => item.InvoiceId);
    }
}
