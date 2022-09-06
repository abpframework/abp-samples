using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EShopOnAbp.BasketService.Services;

public interface IBasketAppService : IApplicationService
{
    Task<BasketDto> GetAsync(Guid? anonymousUserId);
    Task<BasketDto> AddProductAsync(AddProductDto input);
    Task<BasketDto> RemoveProductAsync(RemoveProductDto input);
}