using Acme.ModuleA.Contacts;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace Acme.ModuleA.EntityFrameworkCore;

public static class ModuleADbContextModelCreatingExtensions
{
    public static void ConfigureModuleA(
        this ModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));

        builder.Entity<Contact>(b =>
        {
            b.ToTable(ModuleADbProperties.DbTablePrefix + "Contact", ModuleADbProperties.DbSchema);
            b.ConfigureByConvention();
            b.Property(q => q.Code).IsRequired().HasMaxLength(ContactConsts.MaxCodeLength);
            b.HasIndex(q => q.Code);
        });
    }
}
