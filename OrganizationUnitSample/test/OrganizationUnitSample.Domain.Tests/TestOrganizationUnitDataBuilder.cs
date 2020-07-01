using System;
using System.Linq;
using System.Threading.Tasks;
using OrganizationUnitSample.Products;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Identity;

namespace OrganizationUnitSample
{
    public class TestOrganizationUnitDataBuilder : ITransientDependency
    {
        private readonly OrganizationUnitManager _organizationUnitManager;
        private readonly ProductManager _productManager;
        private readonly IGuidGenerator _guidGenerator;
        private readonly IOrganizationUnitRepository _organizationUnitRepository;

        public TestOrganizationUnitDataBuilder(IGuidGenerator guidGenerator,
            OrganizationUnitManager organizationUnitManager, IOrganizationUnitRepository organizationUnitRepository,
            ProductManager productManager)
        {
            _guidGenerator = guidGenerator;
            _organizationUnitManager = organizationUnitManager;
            _organizationUnitRepository = organizationUnitRepository;
            _productManager = productManager;
        }

        public async Task Build()
        {
            await AddOrganizationUnitsAsync();
            await AddProductsAsync();
        }

        private async Task AddOrganizationUnitsAsync()
        {
            Guid ou1Id = _guidGenerator.Create();
            Guid ou11Id = _guidGenerator.Create();
            Guid ou12Id = _guidGenerator.Create();

            await _organizationUnitManager.CreateAsync(new OrganizationUnit(ou1Id, DataConstants.Ou1Name));

            await _organizationUnitManager.CreateAsync(new OrganizationUnit(ou11Id, DataConstants.Ou11Name, ou1Id));
            await _organizationUnitManager.CreateAsync(new OrganizationUnit(_guidGenerator.Create(),
                DataConstants.Ou111Name, ou11Id));
            await _organizationUnitManager.CreateAsync(new OrganizationUnit(_guidGenerator.Create(),
                DataConstants.Ou112Name, ou11Id));
            await _organizationUnitManager.CreateAsync(new OrganizationUnit(_guidGenerator.Create(),
                DataConstants.Ou113Name, ou11Id));

            await _organizationUnitManager.CreateAsync(new OrganizationUnit(ou12Id, DataConstants.Ou12Name, ou1Id));
        }

        private async Task AddProductsAsync()
        {
            await AddOu1ProductsAsync();
            await AddOu11ProductsAsync();
            await AddOu111ProductsAsync();
            await AddOu112ProductsAsync();
            await AddOu113ProductsAsync();
            await AddOu12ProductsAsync();
        }

        private async Task AddOu12ProductsAsync()
        {
            var ou12 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou12Name);

            await _productManager.CreateAsync(new Product("Raspberry Pi", 165.50f, ou12, null));
            await _productManager.CreateAsync(new Product("Ardunio", 120.30f, ou12, null));
        }

        private async Task AddOu113ProductsAsync()
        {
            var ou113 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou113Name);

            await _productManager.CreateAsync(new Product("Intel i9-9900K", 350.50f, ou113, null));
            await _productManager.CreateAsync(new Product("AMD Ryzen 3700X", 200.30f, ou113, null));
        }

        private async Task AddOu112ProductsAsync()
        {
            var ou112 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou112Name);

            await _productManager.CreateAsync(new Product("Nvidia GTX1080", 750.50f, ou112, null));
            await _productManager.CreateAsync(new Product("Nvidia RTX2060", 650.50f, ou112, null));
            await _productManager.CreateAsync(new Product("Nvidia RTX2080", 970.50f, ou112, null));
            await _productManager.CreateAsync(new Product("AMD Radeon X570", 870.90f, ou112, null));
        }

        private async Task AddOu111ProductsAsync()
        {
            var ou111 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
                ou.DisplayName == DataConstants.Ou111Name);

            await _productManager.CreateAsync(new Product("Intel Motherboard", 250.50f, ou111, null));
            await _productManager.CreateAsync(new Product("AMD Motherboard", 170.90f, ou111, null));
        }

        private async Task AddOu11ProductsAsync()
        {
            var ou11 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
            ou.DisplayName == DataConstants.Ou11Name);

            await _productManager.CreateAsync(new Product("All in one PC", 950.50f, ou11, null));
            await _productManager.CreateAsync(new Product("High End PC", 1320.90f, ou11, null));
        }

        private async Task AddOu1ProductsAsync()
        {
            // var ou1 = (await _organizationUnitRepository.GetListAsync()).FirstOrDefault(ou =>
            //     ou.DisplayName == DataConstants.Ou1Name);
            //
            // await _productManager.CreateAsync(new Product("TV", 750.50f, ou1, null));
            // await _productManager.CreateAsync(new Product("WashingMachine", 320.50f, ou1, null));
            // await _productManager.CreateAsync(new Product("Sound System", 125.00f, ou1, null));
        }
    }
}
