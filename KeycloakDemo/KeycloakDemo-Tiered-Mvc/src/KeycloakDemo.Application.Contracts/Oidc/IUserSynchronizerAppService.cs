using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace KeycloakDemo.Oidc;

public interface IUserSynchronizerAppService : IApplicationService
{
    Task SyncAsync(SyncInputDto input);
}
