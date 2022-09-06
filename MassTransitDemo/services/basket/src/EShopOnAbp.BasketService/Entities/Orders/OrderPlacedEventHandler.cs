using EShopOnAbp.OrderingService.Orders;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Uow;

namespace EShopOnAbp.BasketService.Entities.Orders
{
    public class OrderPlacedEventHandler : IDistributedEventHandler<OrderPlacedEto>, ITransientDependency
    {
        private readonly IBasketRepository _basketRepository;

        public OrderPlacedEventHandler(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        [UnitOfWork]
        public async Task HandleEventAsync(OrderPlacedEto eventData)
        {
            var basket = await _basketRepository.GetAsync(eventData.Buyer.BuyerId.GetValueOrDefault());
            basket.Clear();
            await _basketRepository.UpdateAsync(basket);
        }
    }
}