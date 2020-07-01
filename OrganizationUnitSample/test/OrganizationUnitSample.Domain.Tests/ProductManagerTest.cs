using System.Linq;
using System.Threading.Tasks;
using OrganizationUnitSample.Products;
using Shouldly;
using Volo.Abp.Identity;
using Volo.Abp.Uow;
using Xunit;

namespace OrganizationUnitSample
{
    public class ProductManagerTest : OrganizationUnitSampleDomainTestBase
    {
        private readonly ProductManager _productManager;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;
        private readonly IProductRepository _productRepository;
        private readonly IdentityUserManager _userManager;
        private readonly IUnitOfWorkManager _unitOfWorkManager;

        public ProductManagerTest()
        {
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
            result.Count.ShouldBe(6);
        }

        [Fact]
        public async Task TestProductSeed()
        {
            var result = await _productRepository.GetListAsync();
            result.Count.ShouldBe(12);
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
        public async Task Should_Get_Products_In_OrganizationUnit_Sync()
        {
            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            var productList = await _productManager.GetProductsInOuWithDefaultRepositoryMethodAsync(ou11);
            productList.Count.ShouldBe(2);
            productList.ShouldContain(q => q.Name.Contains("High End PC"));
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

        [Fact]
        public async Task Should_Get_Products_In_OrganizationUnit_Including_Children()
        {
            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName.Equals(DataConstants.Ou11Name));
            ou11.ShouldNotBeNull();

            var productList = await _productManager.GetProductsInOuIncludingChildrenAsync(ou11);

            productList.Count.ShouldBe(10);
            productList.ShouldContain(q => q.Name.Contains("AMD"));
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
