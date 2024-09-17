using Microsoft.AspNetCore.Mvc;
using ModularCrm.Ordering.Contracts.Enums;
using ModularCrm.Ordering.Contracts.Events;
using ModularCrm.Ordering.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.EventBus.Distributed;

namespace ModularCrm.Ordering.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrdersController : AbpControllerBase
    {
        private readonly IRepository<Order, Guid> _orderRepository;
        private readonly IDistributedEventBus _distributedEventBus;

        public OrdersController(
            IRepository<Order, Guid> orderRepository,
            IDistributedEventBus distributedEventBus)
        {
            _orderRepository = orderRepository;
            _distributedEventBus = distributedEventBus;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAsync(OrderCreationModel input)
        {
            // Create a new Order entity
            var order = new Order
            {
                CustomerName = input.CustomerName,
                ProductId = input.ProductId,
                State = OrderState.Placed
            };

            // Save it to the database
            await _orderRepository.InsertAsync(order);

            // Publish an event, so other modules can be informed
            await _distributedEventBus.PublishAsync(
                new OrderPlacedEto
                {
                    ProductId = order.ProductId,
                    CustomerName = order.CustomerName
                });

            return Created();
        }

        public class OrderCreationModel
        {
            public Guid ProductId { get; set; }

            [Required]
            [StringLength(120)]
            public string CustomerName { get; set; }
        }
    }
}
