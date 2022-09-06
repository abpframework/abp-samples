using System;
using System.Threading.Tasks;
using EShopOnAbp.BasketService.Services;
using EShopOnAbp.Shared.Hosting.AspNetCore;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.PublicWeb.ServiceProviders
{
    public class UserBasketProvider : ITransientDependency
    {
        private HttpContext HttpContext => _httpContextAccessor.HttpContext;

        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly ILogger<UserBasketProvider> _logger;
        private readonly IBasketAppService _basketAppService;

        public UserBasketProvider(
            IHttpContextAccessor httpContextAccessor,
            ILogger<UserBasketProvider> logger,
            IBasketAppService basketAppService)
        {
            _httpContextAccessor = httpContextAccessor;
            _logger = logger;
            _basketAppService = basketAppService;
        }

        public virtual async Task<BasketDto> GetBasketAsync()
        {
            try
            {
                // Get anonymous user id from cookie
                HttpContext.Request.Cookies.TryGetValue(EShopConstants.AnonymousUserClaimName,
                    out string anonymousUserId);

                return await _basketAppService.GetAsync(Guid.Parse(anonymousUserId));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                return null;
            }
        }
    }
}