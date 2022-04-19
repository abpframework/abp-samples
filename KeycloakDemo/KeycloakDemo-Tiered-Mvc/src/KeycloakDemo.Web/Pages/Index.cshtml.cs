using System.Threading.Tasks;
using KeycloakDemo.Oidc;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;

namespace KeycloakDemo.Web.Pages;

public class IndexModel : KeycloakDemoPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }

    public async Task OnPostAsync()
    {
        await LazyServiceProvider.LazyGetRequiredService<IUserSynchronizerAppService>().SyncAsync(null);
    }
}
