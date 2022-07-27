using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace Ids2OpenId.Web.Pages;

public class IndexModel : Ids2OpenIdPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
