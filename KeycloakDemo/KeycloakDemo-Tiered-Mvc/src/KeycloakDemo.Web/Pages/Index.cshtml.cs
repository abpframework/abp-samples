using KeycloakDemo.Identity;
using KeycloakDemo.Web.Identity;
using Microsoft.AspNetCore.Authentication;
using System.Threading.Tasks;

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
        await LazyServiceProvider.LazyGetRequiredService<IIdentityProfileAppService>().CreateOrUpdateAsync();
    }
}
