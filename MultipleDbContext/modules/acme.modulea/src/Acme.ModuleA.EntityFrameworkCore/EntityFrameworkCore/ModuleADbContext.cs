using Acme.ModuleA.Contacts;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace Acme.ModuleA.EntityFrameworkCore;

[ConnectionStringName(ModuleADbProperties.ConnectionStringName)]
public class ModuleADbContext : AbpDbContext<ModuleADbContext>, IModuleADbContext
{
    public DbSet<Contact> Contacts { get; set; }

    public ModuleADbContext(DbContextOptions<ModuleADbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureModuleA();
    }
}
