using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using OrganizationUnitSample.Products;
using Shouldly;
using Volo.Abp.Identity;
using Volo.Abp.Uow;
using Xunit;
using Xunit.Abstractions;

namespace OrganizationUnitSample
{
    public class ProductManagerTest : OrganizationUnitSampleDomainTestBase
    {
        private readonly ProductManager _productManager;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;
        private readonly IProductRepository _productRepository;
        private readonly IdentityUserManager _userManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly ITestOutputHelper _testOutputHelper;

        public ProductManagerTest(ITestOutputHelper testOutputHelper)
        {
            _testOutputHelper = testOutputHelper;
            _unitOfWorkManager = GetRequiredService<IUnitOfWorkManager>();
            _userManager = GetRequiredService<IdentityUserManager>();
            _productRepository = GetRequiredService<IProductRepository>();
            _organizationUnitRepository = GetRequiredService<IOrganizationUnitRepository>();
            _productManager = GetRequiredService<ProductManager>();
        }

        [Fact]
        public async Task TestOrganizationUnitSeed()
        {
            var result = await _organizationUnitRepository.GetListAsync();
            result.Count.ShouldBeGreaterThan(5);
        }

        [Fact]
        public async Task TestProductSeed()
        {
            var result = await _productRepository.GetListAsync();
            result.Count.ShouldBeGreaterThan(11);
        }

        [Fact]
        public async Task Should_Create_Products_With_OrganizationUnit()
        {
            var ou1 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou1Name);
            ou1.ShouldNotBeNull();

            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou11Name);
            ou11.ShouldNotBeNull();

            await _productManager.CreateAsync(new Product(name: "TV", price: 1350.55f, ou1, tenantId: null));
            await _productManager.CreateAsync(new Product(name: "Fridge", price: 990.45f, ou11, tenantId: null));

            var products = await _productRepository.GetListAsync();

            products.First(q => q.Name.Contains("TV")).OrganizationUnitId.ShouldBe(ou1.Id);
            products.First(q => q.Name.Contains("Fridge")).OrganizationUnitId.ShouldBe(ou11.Id);
        }

        [Fact]
        public async Task Should_Get_Products_In_OrganizationUnit_WithDefaultRepositoryMethod()
        {
            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            using (var uow = _unitOfWorkManager.Begin())
            {
                var productList = await _productManager.GetProductsInOuWithDefaultRepositoryMethodAsync(ou11);
                productList.Count.ShouldBe(2);
                productList.ShouldContain(q => q.Name.Contains("High End PC"));
                await uow.CompleteAsync();
            }
        }

        [Fact]
        public async Task Should_Get_Products_In_OrganizationUnit()
        {
            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            var productList = await _productManager.GetProductsInOuAsync(ou11);
            productList.Count.ShouldBe(2);
            productList.ShouldContain(q => q.Name.Contains("High End PC"));
        }

        [Fact, Trait("Category", "Q")]
        public async Task Should_Get_Products_In_OrganizationUnit_Including_Children()
        {
            long elapsedTime = 0;
            var productCount = await _productRepository.GetCountAsync();
            var ouCount = await _organizationUnitRepository.GetCountAsync();
            int foundProducts = 0;

            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
            ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            using (var uow = _unitOfWorkManager.Begin())
            {
                Stopwatch timer = Stopwatch.StartNew();
                var productList = await _productManager.GetProductsInOuIncludingChildrenAsync(ou11);
                timer.Stop();
                elapsedTime = timer.ElapsedMilliseconds;

                productList.Count.ShouldBe(10);
                productList.ShouldContain(q => q.Name.Contains("AMD"));
                foundProducts = productList.Count;

                await uow.CompleteAsync();
            }

            Console.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
            _testOutputHelper.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
        }

        [Fact, Trait("Category", "Q")]
        public async Task Should_Get_Products_In_OrganizationUnit_Including_Children_Optimized()
        {
            long elapsedTime = 0;
            var productCount = await _productRepository.GetCountAsync();
            var ouCount = await _organizationUnitRepository.GetCountAsync();
            int foundProducts = 0;

            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            using (var uow = _unitOfWorkManager.Begin())
            {
                Stopwatch timer = Stopwatch.StartNew();
                var productList = await _productManager.GetProductsInOuIncludingChildrenOptimizedAsync(ou11);
                timer.Stop();
                elapsedTime = timer.ElapsedMilliseconds;

                productList.Count.ShouldBe(10);
                productList.ShouldContain(q => q.Name.Contains("AMD"));
                foundProducts = productList.Count;

                await uow.CompleteAsync();
            }

            Console.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
            _testOutputHelper.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
        }

        [Fact, Trait("Category", "Q")]
        public async Task Should_Get_Products_In_OrganizationUnit_Including_Children_Optimized_More()
        {
            long elapsedTime = 0;
            var productCount = await _productRepository.GetCountAsync();
            var ouCount = await _organizationUnitRepository.GetCountAsync();
            int foundProducts = 0;

            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            using (var uow = _unitOfWorkManager.Begin())
            {
                Stopwatch timer = Stopwatch.StartNew();
                var productList = await _productManager.GetProductsInOuIncludingChildrenOptimizedMoreAsync(ou11);
                timer.Stop();
                elapsedTime = timer.ElapsedMilliseconds;

                productList.Count.ShouldBe(10);
                productList.ShouldContain(q => q.Name.Contains("AMD"));
                foundProducts = productList.Count;

                await uow.CompleteAsync();
            }
            Console.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
            _testOutputHelper.WriteLine($"Elapsed time {elapsedTime} ms for finding {foundProducts} products in total of {productCount} products and {ouCount} organization units");
        }

        [Fact]
        public async Task Should_Get_Products_Of_User()
        {
            IdentityUser user = await _userManager.FindByNameAsync("admin");
            user.ShouldNotBeNull();

            using (var uow = _unitOfWorkManager.Begin(requiresNew: true))
            {
                var ou112 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                    ou.DisplayName.Equals(DataConstants.Ou112Name));

                await _userManager.AddToOrganizationUnitAsync(user.Id, ou112.Id);
                await uow.CompleteAsync();
            }

            var productList = await _productManager.GetProductForUserAsync(user.Id);
            productList.ShouldContain(t => t.Name.Contains("Nvidia"));
            productList.Count.ShouldBe(4);
        }
    }
}
