using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Identity;

namespace PasswordlessAuthentication.Web.Pages
{
    public class IndexModel : PasswordlessAuthenticationPageModel
    {
        protected IdentityUserManager UserManager { get; }

        private readonly IIdentityUserRepository _userRepository;

        public string PasswordlessLoginUrl { get; set; }

        public string Email { get; set; }

        public IndexModel(IdentityUserManager userManager, IIdentityUserRepository userRepository)
        {
            UserManager = userManager;
            _userRepository = userRepository;
        }
        
        public ActionResult OnGet()
        {
            if (!CurrentUser.IsAuthenticated)
            {
                return Redirect("/Account/Login");
            }

            return Page();
        }
        
        //added for passwordless authentication
        public async Task<IActionResult> OnPostGeneratePasswordlessTokenAsync()
        {
            var adminUser = await _userRepository.FindByNormalizedUserNameAsync("admin");
            
            var token = await UserManager.GenerateUserTokenAsync(adminUser, "PasswordlessLoginProvider",
                "passwordless-auth");
            
            PasswordlessLoginUrl = Url.Action("Login", "Passwordless",
                new {token = token, userId = adminUser.Id.ToString()}, Request.Scheme);

            return Page();
        }
    }
}