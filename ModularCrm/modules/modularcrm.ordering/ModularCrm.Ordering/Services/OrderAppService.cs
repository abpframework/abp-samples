using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Ordering.Entities;
using ModularCrm.Ordering.Enums;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Ordering.Services;

public class OrderAppService : OrderingAppService, IOrderAppService
{
    private readonly IRepository<Order, Guid>  _orderRepository;

    public OrderAppService(IRepository<Order, Guid> orderRepository)
    {
        _orderRepository = orderRepository;
    }

    public async Task<List<OrderDto>> GetListAsync()
    {
        var orders = await _orderRepository.GetListAsync();
        return ObjectMapper.Map<List<Order>, List<OrderDto>>(orders);
    }

    public async Task CreateAsync(OrderCreationDto input)
    {
        var order = new Order
        {
            CustomerName = input.CustomerName,
            ProductId = input.ProductId,
            State = OrderState.Placed
        };

        await _orderRepository.InsertAsync(order);
    }
}