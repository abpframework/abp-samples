using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace BookStore.EntityFrameworkCore;

public class UnifiedDbContext : AbpDbContext<UnifiedDbContext>
{
    public UnifiedDbContext(DbContextOptions<UnifiedDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureBookStore();
    }
}
