using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace EShopOnAbp.OrderingService.Orders;

public class OrderManagerUnitTests : OrderingServiceDomainTestBase
{
    private readonly OrderManager _orderManager;

    public OrderManagerUnitTests()
    {
        _orderManager = GetRequiredService<OrderManager>();
    }

    [Fact]
    public async Task Should_CreateOrderAsync()
    {
        var paymentMethod = "Cash on Delivery";
        var orderItems =
            new List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
                string pictureUrl, int
                units)>();
        orderItems.Add((Guid.NewGuid(), "Test product", "Code:001", 15, 0, "", 1));
        var createdOrder = await _orderManager.CreateOrderAsync(
            paymentMethod,
            Guid.Parse("11CA0F6D-208E-441A-9F9B-3611C96E4383"),
            "gterdem",
            "gterdem@volosoft.com",
            orderItems,
            "Test Street",
            "Test City",
            "Test Country",
            "Test zipCode");
        
        createdOrder.ShouldNotBeNull();
        createdOrder.OrderStatus.ShouldBe(OrderStatus.Placed);
        createdOrder.PaymentMethod.ShouldBe(paymentMethod);
    }
}