using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;

namespace Shared;

public class MyDbContext : AbpDbContext<MyDbContext>, IHasEventOutbox, IHasEventInbox
{
    public DbSet<OutgoingEventRecord> OutgoingEvents { get; set; }

    public DbSet<IncomingEventRecord> IncomingEvents { get; set; }

    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ConfigureEventOutbox();
        modelBuilder.ConfigureEventInbox();
    }
}

public class MyDbContextFactory : IDesignTimeDbContextFactory<MyDbContext>
{
    public MyDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<MyDbContext>()
            .UseSqlite("Data Source=/Users/maliming/Github/abp-samples/Dapr/PubSub/Shared/dapr.db");

        return new MyDbContext(builder.Options);
    }

}
