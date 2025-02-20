using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.DistributedEvents;

namespace ModularCrm.Products.EntityFrameworkCore;

[ConnectionStringName(ProductsDbProperties.ConnectionStringName)]
public interface IProductsDbContext : IEfCoreDbContext, IHasEventInbox, IHasEventOutbox
{
    DbSet<Product> Products { get; set; }
}
