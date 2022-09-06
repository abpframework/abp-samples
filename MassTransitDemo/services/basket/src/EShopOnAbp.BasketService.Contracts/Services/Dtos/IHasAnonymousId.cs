using System;

namespace EShopOnAbp.BasketService.Services
{
    public interface IHasAnonymousId
    {
        Guid? AnonymousId { get; }
    }
}
