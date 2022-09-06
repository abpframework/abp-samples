using EShopOnAbp.OrderingService.Orders;
using EShopOnAbp.OrderingService.Orders.Specifications;
using EShopOnAbp.OrderingService.Samples;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace EShopOnAbp.OrderingService.EntityFrameworkCore.Orders;

public class OrderRepository_Tests : SampleRepository_Tests<OrderingServiceEntityFrameworkCoreTestModule>
{
    private readonly TestData _testData;
    private readonly IOrderRepository _orderRepository;
    private readonly IOrderingServiceDbContext _dbContext;
    private readonly OrderManager _orderManager;

    public OrderRepository_Tests()
    {
        _orderManager = GetRequiredService<OrderManager>();
        _dbContext = GetRequiredService<IOrderingServiceDbContext>();
        _orderRepository = GetRequiredService<IOrderRepository>();
        _testData = GetRequiredService<TestData>();
    }

    [Fact]
    public async Task Should_Get_User_Orders()
    {
        var orders =
            await _orderRepository.GetOrdersByUserId(_testData.CurrentUserId, new Last30DaysSpecification(), true);
        orders.Count.ShouldBe(3);
        var firstOrder = orders.First();
        firstOrder.OrderItems.Count.ShouldBe(5);
    }
    
    [Fact]
    public async Task Should_Get_Order_By_OrderNo()
    {
        // Create new order
        var orderItems =
            new List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
                string pictureUrl, int
                units)>();
        orderItems.Add((Guid.NewGuid(), "Test product", "Code:001", 15, 0, "", 1));
        var createdOrder = await _orderManager.CreateOrderAsync(
            "paypal",
            Guid.Parse("11CA0F6D-208E-441A-9F9B-3611C96E4383"),
            "gterdem",
            "gterdem@volosoft.com",
            orderItems,
            "Test Street",
            "Test City",
            "Test Country",
            "Test zipCode");
        
        createdOrder.ShouldNotBeNull();
        
        // Get order
        var order = await _orderRepository.GetByOrderNoAsync(createdOrder.OrderNo);
        order.OrderNo.ShouldBe(createdOrder.OrderNo);
        order.OrderItems.Count.ShouldBe(1);
        order.OrderStatus.ShouldBe(OrderStatus.Placed);
        order.PaymentStatus.ShouldBe("Waiting");
    }
    
    [Fact]
    public async Task Should_Get_Users_Last_Year_Orders()
    {
        var orders =
            await _orderRepository.GetOrdersByUserId(_testData.CurrentUserId, new YearSpecification(2020), true);
        orders.Count.ShouldBe(0);
    }
}