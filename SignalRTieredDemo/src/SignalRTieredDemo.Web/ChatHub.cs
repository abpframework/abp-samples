using Microsoft.AspNetCore.Authorization;
using Volo.Abp.AspNetCore.SignalR;

namespace SignalRTieredDemo.Web
{
    [Authorize]
    public class ChatHub : AbpHub
    {
    }
}
