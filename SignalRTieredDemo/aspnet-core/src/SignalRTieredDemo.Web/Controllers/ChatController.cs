using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.EventBus.Distributed;

namespace SignalRTieredDemo.Web.Controllers
{
    [Route("api/chat")]
    public class ChatController : AbpController
    {
        private readonly IDistributedEventBus _distributedEventBus;
        private readonly IUserAppService _userAppService;

        public ChatController(IDistributedEventBus distributedEventBus, IUserAppService userAppService)
        {
            _distributedEventBus = distributedEventBus;
            _userAppService = userAppService;
        }

        [HttpPost]
        [Route("send-message")]
        public async Task SendMessage(string targetUserName, string message)
        {
            var targetId = await _userAppService.GetUserIdByUserNameAsync(targetUserName);

            await _distributedEventBus.PublishAsync(new ReceivedMessageEto(targetId, CurrentUser.UserName, message));
        }
    }
}
