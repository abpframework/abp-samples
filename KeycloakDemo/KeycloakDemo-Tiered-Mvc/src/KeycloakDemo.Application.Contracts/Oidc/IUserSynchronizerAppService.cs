using System.Collections.Generic;
using System.Threading.Tasks;

namespace KeycloakDemo.Oidc;

public interface IUserSynchronizerAppService
{
    Task SyncAsync(SyncInputDto input);
}
