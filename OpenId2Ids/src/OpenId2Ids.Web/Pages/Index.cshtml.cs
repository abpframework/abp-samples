using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace OpenId2Ids.Web.Pages;

public class IndexModel : OpenId2IdsPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
