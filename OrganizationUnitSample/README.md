# Organization Unit Sample Projects

This is the sample project for Organization Unit Management to demonstrate common use cases. 

Also see [Organization Unit Management docs](https://github.com/abpframework/abp/blob/rel-3.3/docs/en/Modules/Organization-Units.md).



#### Creating An Entity That Belongs To An Organization Unit

The most obvious usage of OUs is to assign an entity to an OU. [Sample Product entity](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/Product.cs):

```csharp
public class Product : AuditedAggregateRoot<Guid>, IMultiTenant
{
    public virtual Guid OrganizationUnitId { get; private set; }
    public virtual Guid? TenantId { get; private set;}
    public virtual string Name { get; private set; }
    public virtual float Price { get; private set; }
}
```

You need to create **OrganizationUnitId** property to assign this entity to an OU. Depending on requirement, this property can be nullable. You can now relate a Product to an OU and query the products of a specific OU.

You can use **IMultiTenant** interface if you want to distinguish products of different tenants in a multi-tenant application (see the [Multi-Tenancy document](https://github.com/abpframework/abp/blob/dev/docs/en/Multi-Tenancy.md) for more info). If your application is not multi-tenant, you don't need this interface and property.

#### Getting Entities In An Organization Unit

To get the Products of an OU, you can implement a simple domain service; [Product Manager](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/ProductManager.cs) in this case to get the filtered data:

```csharp
public class ProductManager : IDomainService
{
    private readonly IProductRepository<Product> _productRepository;

    public ProductManager(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    public virtual Task<List<Product>> GetProductsInOuAsync(OrganizationUnit organizationUnit)
    {
        return await AsyncExecuter.ToListAsync(_productRepository.Where(p =>
                p.OrganizationUnitId == organizationUnit.Id));
    }               
}
```

**For better practice**, you should consider querying it on domain layer for performance and scalability. To do so, add a method to your [IProductRepository](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/IProductRepository.cs) interface:

```csharp
public interface IProductRepository : IRepository<Product, Guid>
{
    public Task<List<Product>> GetProductsInOrganizationUnitAsync(Guid organizationUnitId);
}
```

Then implement it on your ORM layer (which is EntityFrameworkCore in this sample), [ProductRepository](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.EntityFrameworkCore/Products/ProductRepository.cs):

```csharp
public async Task<List<Product>> GetProductsInOrganizationUnitAsync(Guid organizationUnitId)
{
    return await DbSet.Where(p => p.OrganizationUnitId == organizationUnitId).ToListAsync();
}
```

Afterwards, you can modify your domain service [Product Manager](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/ProductManager.cs) like below:

```csharp
public async Task<List<Product>> GetProductsInOuAsync(OrganizationUnit organizationUnit)
{
	return await _productRepository.GetProductsInOrganizationUnitAsync(organizationUnit.Id);
}
```

#### Get Entities In An Organization Unit Including It's Child Organization Units

You may want to get the Products of an organization unit including child organization units. In this case, the OU **Code** can be helpful.

You can introduce an other method for your domain service [Product Manager](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/ProductManager.cs) like below:

```csharp
public class ProductManager : DomainService
{
    private readonly IProductRepository _productRepository;
    private readonly IOrganizationUnitRepository _organizationUnitRepository;

    public ProductManager(IProductRepository productRepository,
                          IOrganizationUnitRepository organizationUnitRepository)
    {
        _productRepository = productRepository;
        _organizationUnitRepository = organizationUnitRepository;
    }

    public virtual async Task<List<Product>> GetProductsInOuIncludingChildrenAsync(
        OrganizationUnit organizationUnit)
    {
        var ouIds = (await _organizationUnitRepository.GetAllChildrenWithParentCodeAsync(
                organizationUnit.Code, organizationUnit.ParentId))
				.Select(ou => ou.Id).ToList();
            return await AsyncExecuter.ToListAsync(_productRepository.Where(p => ouIds.Contains(p.OrganizationUnitId)));
    }
}
```

This way, you can get the **organizationUnitIds** of all the children of the given OU. Then look for the products with these organizationUnitIds. This way you can hierarchically get the products of an OU.

#### Filter Entities For A User

You may want to get all products that are in the OUs of a specific user. To do so, you need to find the Ids of the OUs of the user. Then use a **Contains** condition while getting the products. **For better practice**, you should start introducing a new method to your [IProductRepository](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/IProductRepository.cs) interface:

```csharp
public interface IProductRepository : IRepository<Product, Guid>
{
    public Task<List<Product>> GetProductsOfOrganizationUnitListAsync(List<Guid> organizationUnitIds);
}
```

Afterwards, implement it on your [ProductRepository](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.EntityFrameworkCore/Products/ProductRepository.cs)

```csharp
public Task<List<Product>> GetProductsOfOrganizationUnitListAsync(List<Guid> organizationUnitIds)
{
    return DbSet.Where(p => organizationUnitIds.Contains(p.OrganizationUnitId))
        .ToListAsync();
}
```

As last, you need to pass the OuIds of user to the repository on your [ProductManager](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/src/OrganizationUnitSample.Domain/Products/ProductManager.cs) domain service:

```csharp
public class ProductManager : DomainService
{
    private readonly IProductRepository _productRepository;
    private readonly IdentityUserManager _userManager;

    public ProductManager(IProductRepository productRepository,
                          IdentityUserManager userManager)
    {
        _productRepository = productRepository;
        _organizationUnitRepository = organizationUnitRepository;
        _userManager = userManager;
    }

    public virtual async Task<List<Product>> GetProductForUserAsync(Guid userId)
    {
        var user = await _userManager.GetByIdAsync(userId);
        var userOuIds = user.OrganizationUnits.Select(ou => ou.OrganizationUnitId);

        return await _productRepository.GetProductsOfOrganizationUnitListAsync(userOuIds.ToList());
    }
}
```

**See also** [ProductManagerTest](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/test/OrganizationUnitSample.Domain.Tests/ProductManagerTest.cs) domain service tests and [TestOrganizationUnitDataBuilder](https://github.com/abpframework/abp-samples/blob/master/OrganizationUnitSample/test/OrganizationUnitSample.Domain.Tests/TestOrganizationUnitDataBuilder.cs) for the test data creation for this sample.