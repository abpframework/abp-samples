using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace OrganizationUnitSample.Products
{
    public interface IProductRepository : IRepository<Product, Guid>
    {
        public Task<List<Product>> GetProductsOfOrganizationUnitListAsync(List<Guid> organizationUnitIds);
    }
}
