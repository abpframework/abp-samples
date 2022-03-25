using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

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
}
