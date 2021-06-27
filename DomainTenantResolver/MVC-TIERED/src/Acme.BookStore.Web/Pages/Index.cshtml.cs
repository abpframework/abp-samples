using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Volo.Abp.AspNetCore.Mvc.Client;

namespace Acme.BookStore.Web.Pages
{
    public class IndexModel : BookStorePageModel
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
