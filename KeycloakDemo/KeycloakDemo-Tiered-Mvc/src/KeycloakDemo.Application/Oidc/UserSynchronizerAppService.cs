using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeycloakDemo.Oidc;

public class UserSynchronizerAppService : KeycloakDemoAppService, IUserSynchronizerAppService
{
    public Task SyncAsync(SyncInputDto input)
    {
        var currentUserClaims = CurrentUser.GetAllClaims();

        return Task.CompletedTask;
    }
}
