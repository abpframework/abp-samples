using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Volo.Abp.EventBus.Distributed;
using Volo.Abp.Identity;
using Volo.Abp.Users;

namespace SignalRTieredDemo.Controllers
{
    public class ChatController
    {
        public ICurrentUser CurrentUser { get; }
        private readonly IDistributedEventBus _distributedEventBus;
        private readonly IIdentityUserRepository _identityUserRepository;
        private readonly ILookupNormalizer _lookupNormalizer;

        public ChatController(IDistributedEventBus distributedEventBus, ICurrentUser currentUser, IIdentityUserRepository identityUserRepository, ILookupNormalizer lookupNormalizer)
        {
            CurrentUser = currentUser;
            _distributedEventBus = distributedEventBus;
            _identityUserRepository = identityUserRepository;
            _lookupNormalizer = lookupNormalizer;
        }

        [HttpPost]
        [Route("send-message")]
        public async Task SendMessage(string targetUserName, string message)
        {
            var target = await _identityUserRepository.FindByNormalizedUserNameAsync(_lookupNormalizer.NormalizeName(targetUserName));

            await _distributedEventBus.PublishAsync(new ReceivedMessageEventData(target.Id, CurrentUser.UserName, message));
        }
    }
}
