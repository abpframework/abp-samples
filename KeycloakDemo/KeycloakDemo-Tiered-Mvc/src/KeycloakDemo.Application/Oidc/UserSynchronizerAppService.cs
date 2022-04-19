using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Volo.Abp.Identity;

namespace KeycloakDemo.Oidc;

public class UserSynchronizerAppService : KeycloakDemoAppService, IUserSynchronizerAppService
{
    protected readonly IdentityUserManager userManager;

    public UserSynchronizerAppService(IdentityUserManager userManager)
    {
        this.userManager = userManager;
    }

    public async Task SyncAsync(SyncInputDto input)
    {
        var id = Guid.Parse(input.Claims.Find(x => x.Type == ClaimTypes.NameIdentifier).Value);
        var userName = input.Claims.Find(x => x.Type == "preferred_username")?.Value;
        var email = input.Claims.Find(x => x.Type == ClaimTypes.Email)?.Value;

        var user = new IdentityUser(id, userName, email, CurrentTenant.Id);

        await userManager.CreateAsync(user);
    }
}
