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

        public async Task<List<Product>> GetProductsInOrganizationUnitListAsync(List<Guid> organizationUnitIds)
        {
            return await Products.Where(p => organizationUnitIds.Contains(p.OrganizationUnitId))
                .ToListAsync();
        }

        public async Task<List<Product>> GetProductsInOrganizationUnitAsync(Guid organizationUnitId)
        {
            return await Products.Where(p => p.OrganizationUnitId == organizationUnitId).ToListAsync();
        }
    }
}
