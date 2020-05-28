using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.AspNetCore.SignalR;
using Volo.Abp.EventBus.Distributed;

namespace SignalRTieredDemo.Web
{
    [Authorize]
    public class ChatHub : AbpHub
    {
    }
}
