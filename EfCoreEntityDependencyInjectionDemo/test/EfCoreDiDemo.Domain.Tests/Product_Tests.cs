using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Xunit;

namespace EfCoreDiDemo;

public class Product_Tests : EfCoreDiDemoDomainTestBase
{
    private readonly IRepository<Product, Guid> _productRepository;

    public Product_Tests()
    {
        _productRepository = GetRequiredService<IRepository<Product, Guid>>();
    }

    [Fact]
    public async Task Should_Not_Allow_Duplicate_ProductCode()
    {
        /* We must manually create a Unit of Work here.
         * Otherwise, EF Core DbContext will be disposed after the
         * "...productRepository.GetAsync..." call and the ServiceProvider
         * will be disposed, which is used in the "ChangeCodeAsync" method
         * (because its life time is tied to DbContext's lifetime).
         *
         * In a normal web application, that won't be a problem because
         * ABP already creates a UOW for each HTTP request
         * (or application service / controller method).
         */
        await WithUnitOfWorkAsync(async () =>
        {
            var product1 = await _productRepository.GetAsync(p => p.ProductCode == "P01");
            
            await product1.ChangeCodeAsync("P03"); //No problem, it is a new code

            //Throws exception because "P02" is already used by another product
            await Assert.ThrowsAsync<ApplicationException>(async () =>
            {
                await product1.ChangeCodeAsync("P02");
            });
        });
    }
}