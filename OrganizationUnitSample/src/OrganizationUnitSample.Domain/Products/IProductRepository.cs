using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace OrganizationUnitSample.Products
{
    public interface IProductRepository : IRepository<Product, Guid>
    {
        public Task<List<Product>> GetProductsInOrganizationUnitListAsync(List<Guid> organizationUnitIds);
        public Task<List<Product>> GetProductsInOrganizationUnitAsync(Guid organizationUnitId);
    }
}
