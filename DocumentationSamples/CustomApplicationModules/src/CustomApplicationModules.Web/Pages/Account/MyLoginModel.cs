using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Web;
using Volo.Abp.Account.Web.Pages.Account;

namespace CustomApplicationModules.Web.Pages.Account
{
    public class MyLoginModel : LoginModel
    {

        public MyLoginModel(
            IAuthenticationSchemeProvider schemeProvider,
            IOptions<AbpAccountOptions> accountOptions)
            : base(schemeProvider, accountOptions)
        {
        }

        public override async Task<IActionResult> OnGetAsync()
        {
            //TODO: Additional logic
            var result = await base.OnGetAsync();
            //TODO: Additional logic

            return result;
        }
    }
}
