using System.Threading.Tasks;
using EShopOnAbp.OrderingService.Orders;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.OrderingService
{
    public class OrderingServiceTestDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly OrderManager _orderManager;
        private readonly TestData _testData;
        private readonly TestProducts _testProducts;

        public OrderingServiceTestDataSeedContributor(
            OrderManager orderManager,
            TestData testData,
            TestProducts testProducts)
        {
            _orderManager = orderManager;
            _testData = testData;
            _testProducts = testProducts;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await SeedTestOrdersAsync();
        }

        private async Task SeedTestOrdersAsync()
        {
            await _orderManager.CreateOrderAsync(
                "paypal",
                _testData.CurrentUserId,
                _testData.CurrentUserName,
                _testData.CurrentUserEmail,
                _testProducts.GetRandomProducts(5),
                _testData.Address.Street,
                _testData.Address.City,
                _testData.Address.Country,
                _testData.Address.ZipCode
            );

            await _orderManager.CreateOrderAsync(
                "paypal", _testData.CurrentUserId, _testData.CurrentUserName, _testData.CurrentUserEmail,
                _testProducts.GetRandomProducts(10),
                _testData.Address.Street,
                _testData.Address.City,
                _testData.Address.Country,
                _testData.Address.ZipCode
            );

            await _orderManager.CreateOrderAsync(
                "paypal", _testData.CurrentUserId, _testData.CurrentUserName, _testData.CurrentUserEmail,
                _testProducts.GetRandomProducts(2),
                _testData.Address.Street,
                _testData.Address.City,
                _testData.Address.Country,
                _testData.Address.ZipCode
            );

            await _orderManager.CreateOrderAsync(
                "paypal", _testData.TestUserId, _testData.TestUserName, _testData.TestUserEmail,
                _testProducts.GetRandomProducts(7),
                _testData.Address.Street,
                _testData.Address.City,
                _testData.Address.Country,
                _testData.Address.ZipCode
            );
        }
    }
}