using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace OpenIddictDemo.Web.Pages
{
    public class IndexModel : OpenIddictDemoPageModel
    {
        public void OnGet()
        {
            
        }

        public async Task OnPostLoginAsync()
        {
            await HttpContext.ChallengeAsync("oidc");
        }
    }
}