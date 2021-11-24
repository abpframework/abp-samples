using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace ProfilerTiered.Web.Pages
{
    public class IndexModel : ProfilerTieredPageModel
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