using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace AspirationalAbp.Web.Pages;

public class IndexModel : AspirationalAbpPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
