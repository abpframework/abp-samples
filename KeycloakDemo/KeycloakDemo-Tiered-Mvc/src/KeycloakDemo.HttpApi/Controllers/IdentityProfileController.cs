using KeycloakDemo.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace KeycloakDemo.Controllers;

[Authorize]
[Route("/api/identity-profile")]
public class IdentityProfileController : KeycloakDemoController, IIdentityProfileAppService
{
    protected IIdentityProfileAppService IdentityProfileAppService { get; }

    public IdentityProfileController(IIdentityProfileAppService identityProfileAppService)
    {
        IdentityProfileAppService = identityProfileAppService;
    }

    [Route("create-or-update")]
    [HttpPost]
    public Task CreateOrUpdateAsync()
    {
        return IdentityProfileAppService.CreateOrUpdateAsync();
    }
}
