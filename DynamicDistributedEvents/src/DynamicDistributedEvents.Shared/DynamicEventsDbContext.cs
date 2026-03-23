using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;

namespace DynamicDistributedEvents;

public class DynamicEventsDbContext : AbpDbContext<DynamicEventsDbContext>, IHasEventOutbox, IHasEventInbox
{
    public DbSet<OutgoingEventRecord> OutgoingEvents { get; set; }

    public DbSet<IncomingEventRecord> IncomingEvents { get; set; }

    public DynamicEventsDbContext(DbContextOptions<DynamicEventsDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureEventOutbox();
        modelBuilder.ConfigureEventInbox();
    }
}
