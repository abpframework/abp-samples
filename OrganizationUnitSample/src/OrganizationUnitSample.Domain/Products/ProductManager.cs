using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.Identity;
using Volo.Abp.Uow;

namespace OrganizationUnitSample.Products
{
    public class ProductManager : DomainService
    {
        private readonly IProductRepository _productRepository;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;
        private readonly IdentityUserManager _userManager;

        public ProductManager(IProductRepository productRepository,
            IOrganizationUnitRepository organizationUnitRepository, IdentityUserManager userManager)
        {
            _productRepository = productRepository;
            _organizationUnitRepository = organizationUnitRepository;
            _userManager = userManager;
        }

        public virtual async Task<List<Product>> GetProductsInOuWithDefaultRepositoryMethodAsync(
            OrganizationUnit organizationUnit)
        {
            return await AsyncExecuter.ToListAsync((await _productRepository.GetQueryableAsync()).Where(p =>
                p.OrganizationUnitId == organizationUnit.Id));
        }

        public virtual async Task<List<Product>> GetProductsInOuAsync(OrganizationUnit organizationUnit)
        {
            return await _productRepository.GetProductsInOrganizationUnitAsync(organizationUnit.Id);
        }

        public virtual async Task<List<Product>> GetProductsInOuIncludingChildrenAsync(
            OrganizationUnit organizationUnit)
        {
            var query = from product in (await _productRepository.GetListAsync())
                        join ou in (await _organizationUnitRepository.GetListAsync()).Where(ou =>
                            ou.Code.StartsWith(organizationUnit.Code)) on product.OrganizationUnitId equals ou.Id
                        select product;

            return query.ToList();
        }

        public virtual async Task<List<Product>> GetProductsInOuIncludingChildrenOptimizedAsync(OrganizationUnit organizationUnit)
        {
            var ouIds = (await _organizationUnitRepository.GetListAsync())
                .Where(ou => ou.Code.StartsWith(organizationUnit.Code)).Select(ou => ou.Id).ToList();
            return await AsyncExecuter.ToListAsync((await _productRepository.GetQueryableAsync()).Where(p => ouIds.Contains(p.OrganizationUnitId)));

        }

        public virtual async Task<List<Product>> GetProductsInOuIncludingChildrenOptimizedMoreAsync(OrganizationUnit organizationUnit)
        {
            var ouIds = (await _organizationUnitRepository.GetAllChildrenWithParentCodeAsync(
                code: organizationUnit.Code,
                parentId: organizationUnit.ParentId)).Select(ou => ou.Id).ToList();
            return await AsyncExecuter.ToListAsync((await _productRepository.GetQueryableAsync()).Where(p => ouIds.Contains(p.OrganizationUnitId)));

        }

        public virtual async Task<List<Product>> GetProductForUserAsync(Guid userId)
        {
            var user = await _userManager.GetByIdAsync(userId);
            // var userOrganizationUnits = await _userManager.GetOrganizationUnitsAsync(user); // TODO: shouldn't returns null? Discuss if the methods should be in UoW.
            // var userOuIds = userOrganizationUnits.Select(ou => ou.Id);
            var userOuIds = user.OrganizationUnits.Select(ou => ou.OrganizationUnitId);

            return await _productRepository.GetProductsInOrganizationUnitListAsync(userOuIds.ToList());
        }

        [UnitOfWork]
        public virtual async Task CreateAsync(Product product)
        {
            await _productRepository.InsertAsync(product);
        }

        [UnitOfWork]
        public virtual async Task DeleteAsync(Guid id)
        {
            await _productRepository.DeleteAsync(id);
        }
    }
}
