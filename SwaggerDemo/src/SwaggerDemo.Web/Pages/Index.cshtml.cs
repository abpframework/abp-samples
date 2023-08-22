using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace SwaggerDemo.Web.Pages;

public class IndexModel : SwaggerDemoPageModel
{
    public void OnGet()
    {

    }

    public async Task OnPostLoginAsync()
    {
        await HttpContext.ChallengeAsync("oidc");
    }
}
