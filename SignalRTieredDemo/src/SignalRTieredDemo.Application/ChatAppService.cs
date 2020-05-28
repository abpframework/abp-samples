using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Identity;

namespace SignalRTieredDemo
{
    public class ChatAppService: SignalRTieredDemoAppService, IChatAppService
    {
        private readonly IIdentityUserRepository _identityUserRepository;
        private readonly ILookupNormalizer _lookupNormalizer;
        private readonly IDistributedEventBus _distributedEventBus;

        public ChatAppService(IIdentityUserRepository identityUserRepository, ILookupNormalizer lookupNormalizer, IDistributedEventBus distributedEventBus)
        {
            _identityUserRepository = identityUserRepository;
            _lookupNormalizer = lookupNormalizer;
            _distributedEventBus = distributedEventBus;
        }

        public async Task SendMessageAsync(SendMessageInput input)
        {
            var targetId = (await _identityUserRepository.FindByNormalizedUserNameAsync(_lookupNormalizer.NormalizeName(input.TargetUserName))).Id;

            await _distributedEventBus.PublishAsync(new ReceivedMessageEto(targetId, CurrentUser.UserName, input.Message));
        }
    }
}
