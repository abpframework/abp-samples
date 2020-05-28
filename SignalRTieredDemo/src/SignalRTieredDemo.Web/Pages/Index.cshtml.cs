using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;

namespace SignalRTieredDemo.Web.Pages
{
    public class IndexModel : SignalRTieredDemoPageModel
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