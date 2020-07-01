using System;
using System.Diagnostics.CodeAnalysis;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;

namespace OrganizationUnitSample.Products
{
    // Product Entity belongs to an Organization Unit
    public class Product : AuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid OrganizationUnitId { get; private set; }
        public virtual Guid? TenantId { get; private set; }
        public virtual string Name { get; private set; }
        public virtual float Price { get; private set; }

        protected Product()
        {
        }

        public Product([NotNull] string name, [NotNull] float price, [NotNull] OrganizationUnit organizationUnit,
            Guid? tenantId)
        {
            CheckNameForValidation(name);
            CheckPriceForValidation(price);

            OrganizationUnitId = organizationUnit.Id;
            Name = name;
            Price = price;
            TenantId = tenantId;
        }

        public void UpdateName(string newName)
        {
            CheckNameForValidation(newName);
            Name = newName;
        }

        public void UpdatePrice(float newPrice)
        {
            CheckPriceForValidation(newPrice);
            Price = newPrice;
        }

        public void UpdateOrganizationUnit(OrganizationUnit newOrganizationUnit)
        {
            OrganizationUnitId = newOrganizationUnit.Id;
        }

        public void UpdateTenant(Guid? tenantId)
        {
            TenantId = tenantId;
        }

        private void CheckNameForValidation(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new BusinessException($"N001", "Product name can not be null!");
            }
        }

        private void CheckPriceForValidation(float price)
        {
            if (price == 0)
            {
                throw new BusinessException($"P001", "Price can not be 0!");
            }
        }
    }
}
