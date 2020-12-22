using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Acme.BookStore.Web
{
    public class CustomSignInManager : SignInManager<Volo.Abp.Identity.IdentityUser>
    {
        private const string LoginProviderKey = "LoginProvider";
        private const string XsrfKey = "XsrfId";

        public CustomSignInManager(
            UserManager<Volo.Abp.Identity.IdentityUser> userManager,
            Microsoft.AspNetCore.Http.IHttpContextAccessor contextAccessor,
            IUserClaimsPrincipalFactory<Volo.Abp.Identity.IdentityUser> claimsFactory,
            Microsoft.Extensions.Options.IOptions<IdentityOptions> optionsAccessor,
            Microsoft.Extensions.Logging.ILogger<SignInManager<Volo.Abp.Identity.IdentityUser>> logger,
            Microsoft.AspNetCore.Authentication.IAuthenticationSchemeProvider schemes,
            IUserConfirmation<Volo.Abp.Identity.IdentityUser> confirmation) : base(userManager, contextAccessor,
            claimsFactory, optionsAccessor, logger, schemes, confirmation)
        {
        }

        // https://github.com/dotnet/aspnetcore/blob/master/src/Identity/Core/src/SignInManager.cs#L648-L684
        public override async Task<ExternalLoginInfo> GetExternalLoginInfoAsync(string expectedXsrf = null)
        {
            var auth = await Context.AuthenticateAsync(IdentityConstants.ExternalScheme);
            var items = auth?.Properties?.Items;
            if (auth?.Principal == null || items == null || !items.ContainsKey(LoginProviderKey))
            {
                return null;
            }

            if (expectedXsrf != null)
            {
                if (!items.ContainsKey(XsrfKey))
                {
                    return null;
                }

                var userId = items[XsrfKey] as string;
                if (userId != expectedXsrf)
                {
                    return null;
                }
            }

            var providerKey = auth.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
            var provider = items[LoginProviderKey] as string;
            if (providerKey == null || provider == null)
            {
                return null;
            }

            var providerDisplayName = (await GetExternalAuthenticationSchemesAsync())
                                      .FirstOrDefault(p => p.Name == provider)?.DisplayName
                                      ?? provider;
            return new ExternalLoginInfo(auth.Principal, provider, providerKey, providerDisplayName)
            {
                AuthenticationTokens = auth.Properties.GetTokens(),
                AuthenticationProperties = auth.Properties
            };
        }
    }
}