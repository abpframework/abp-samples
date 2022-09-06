using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Users;
using Xunit;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderApplication_Tests : OrderingServiceApplicationTestBase
{
    private readonly IOrderAppService _orderAppService;
    private readonly TestData _testData;
    private ICurrentUser _currentUser;

    public OrderApplication_Tests()
    {
        _testData = GetRequiredService<TestData>();
        _currentUser = GetRequiredService<ICurrentUser>();
        _orderAppService = GetRequiredService<IOrderAppService>();
    }
    protected override void AfterAddApplication(IServiceCollection services)
    {
        _currentUser = Substitute.For<ICurrentUser>();
        services.AddSingleton(_currentUser);
    }

    [Fact]
    public async Task Should_Create_Order()
    {
        _currentUser.Id.Returns(_testData.CurrentUserId);
        _currentUser.Email.Returns(_testData.CurrentUserEmail);
        _currentUser.Name.Returns(_testData.TestUserName);
        // Create Order
        var orderItems = new List<OrderItemCreateDto>()
        {
            new OrderItemCreateDto()
            {
                Discount = 0,
                Units = 2,
                PictureUrl = string.Empty,
                ProductCode = "Test-001",
                ProductId = Guid.NewGuid(),
                ProductName = "Test product",
                UnitPrice = 150
            }
        };

        var placedOrder = await _orderAppService.CreateAsync(new OrderCreateDto()
        {
            PaymentMethod = "paypal",
            Address = new OrderAddressDto()
            {
                City = "Test City",
                Country = "Test Country",
                Description = "No Description",
                Street = "Test Street",
                ZipCode = "Test ZipCode"
            },
            Products = orderItems
        });

        // Get Order by OrderNo;
        var myOrder = await _orderAppService.GetByOrderNoAsync(placedOrder.OrderNo);
        myOrder.ShouldNotBeNull();

        // Get all orders
        var orders = await _orderAppService.GetOrdersAsync(new GetOrdersInput()
        {
            Filter = string.Empty,
        });
        orders.ShouldNotBeNull();
    }
}