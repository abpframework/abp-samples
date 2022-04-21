using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace KeycloakDemo.Identity;

public interface IIdentityProfileAppService : IApplicationService
{
    Task CreateOrUpdateAsync();
}
