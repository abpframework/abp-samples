using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Xunit;

namespace EfCoreDiDemo;

public class ProductAppService_Tests : EfCoreDiDemoApplicationTestBase 
{
    private readonly IRepository<Product, Guid> _productRepository;
    private readonly IProductAppService _productAppService;

    public ProductAppService_Tests()
    {
        _productAppService = GetRequiredService<IProductAppService>();
        _productRepository = GetRequiredService<IRepository<Product, Guid>>();
    }

    [Fact]
    public async Task Should_Not_Allow_Duplicate_ProductCode()
    {
        var product1 = await _productRepository.GetAsync(p => p.ProductCode == "P01");
        
        //Throws exception because "P02" is already used by another product
        await Assert.ThrowsAsync<ApplicationException>(async () =>
        {
            await _productAppService.ChangeCodeAsync(
                new ChangeProductCodeDto
                {
                    Id = product1.Id,
                    NewProductCode = "P02"
                });
        });
    }
}