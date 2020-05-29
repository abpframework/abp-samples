using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace SignalRTieredDemo
{
    public interface IChatAppService : IApplicationService
    {
        Task SendMessageAsync(SendMessageInput input);
    }
}
