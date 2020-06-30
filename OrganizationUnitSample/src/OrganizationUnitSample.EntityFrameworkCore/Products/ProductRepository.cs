using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OrganizationUnitSample.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace OrganizationUnitSample.Products
{
    public class ProductRepository : EfCoreRepository<OrganizationUnitSampleDbContext, Product, Guid>,
        IProductRepository
    {
        public virtual DbSet<Product> Products => DbContext.Set<Product>();

        public ProductRepository(IDbContextProvider<OrganizationUnitSampleDbContext> dbContextProvider) : base(
            dbContextProvider)
        {
        }

        public Task<List<Product>> GetProductsOfOrganizationUnitListAsync(List<Guid> organizationUnitIds)
        {
            return Products.Where(p => organizationUnitIds.Contains(p.OrganizationUnitId))
                .ToListAsync();
        }

        public Task<List<Product>> GetProductsOfOrganizationUnitAsync(Guid organizationUnitId)
        {
            return Products.Where(p => p.OrganizationUnitId == organizationUnitId).ToListAsync();
        }
    }
}
