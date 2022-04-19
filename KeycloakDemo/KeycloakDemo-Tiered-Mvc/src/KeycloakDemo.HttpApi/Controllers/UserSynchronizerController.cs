using KeycloakDemo.Oidc;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace KeycloakDemo.Controllers;

public class UserSynchronizerController : KeycloakDemoController, IUserSynchronizerAppService
{
    protected IUserSynchronizerAppService UserSynchronizerAppService { get; }

    public UserSynchronizerController(IUserSynchronizerAppService userSynchronizerAppService)
    {
        UserSynchronizerAppService = userSynchronizerAppService;
    }

    [HttpPost]
    public Task SyncAsync(SyncInputDto input)
    {
        return UserSynchronizerAppService.SyncAsync(input);
    }
}
