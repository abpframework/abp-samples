using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace SignalRTieredDemo
{
    public interface IUserAppService : IApplicationService
    {
        Task<Guid> GetUserIdByUserNameAsync(string userName);
    }
}
