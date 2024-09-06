using Microsoft.EntityFrameworkCore;
using ModularCrm.Ordering.Entities;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Ordering.Data
{
    public interface IOrderingDbContext : IEfCoreDbContext
    {
        DbSet<Order> Orders { get; set; }
    }
}
