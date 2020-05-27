using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace SignalRTieredDemo.Web
{
    public class ReceivedMessageEventHandler : IDistributedEventHandler<ReceivedMessageEventData>, ITransientDependency
    {
        private readonly IHubContext<ChatHub> _hubContext;

        public ReceivedMessageEventHandler(IHubContext<ChatHub> hubContext)
        {
            _hubContext = hubContext;
        }

        public async Task HandleEventAsync(ReceivedMessageEventData eventData)
        {
            var message = $"{eventData.SenderUserName}: {eventData.ReceivedText}";

            await _hubContext.Clients
                .User(eventData.TargetUserId.ToString())
                .SendAsync("ReceiveMessage", message);
        }
    }
}
