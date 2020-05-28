using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Identity;

namespace SignalRTieredDemo
{
    public class UserAppService: SignalRTieredDemoAppService, IUserAppService
    {
        private readonly IIdentityUserRepository _identityUserRepository;
        private readonly ILookupNormalizer _lookupNormalizer;

        public UserAppService(IIdentityUserRepository identityUserRepository, ILookupNormalizer lookupNormalizer)
        {
            _identityUserRepository = identityUserRepository;
            _lookupNormalizer = lookupNormalizer;
        }

        public async Task<Guid> GetUserIdByUserNameAsync(string userName)
        {
            return (await _identityUserRepository.FindByNormalizedUserNameAsync(_lookupNormalizer.NormalizeName(userName))).Id;
        }
    }
}
