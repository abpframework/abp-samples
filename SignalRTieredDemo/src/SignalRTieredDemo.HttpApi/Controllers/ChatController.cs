using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace SignalRTieredDemo.Controllers
{
    [Route("api/app/chat")]
    public class ChatController : AbpController, IChatAppService
    {
        private readonly IChatAppService _chatAppService;

        public ChatController(IChatAppService chatAppService)
        {
            _chatAppService = chatAppService;
        }

        [HttpPost]
        [Route("send-message")]
        public async Task SendMessageAsync(SendMessageInput input)
        {
            await _chatAppService.SendMessageAsync(input);
        }
    }
}
