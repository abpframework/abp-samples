using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using OpenIddict.Validation.AspNetCore;

namespace Volo.Abp.OpenIddict
{
    public static class OpenIddictValidationMiddleware
    {
        public static IApplicationBuilder UseOpenIddictValidationAuthenticate(
            this IApplicationBuilder app,
            string schemes = OpenIddictValidationAspNetCoreDefaults.AuthenticationScheme)
        {
            return app.Use(async (ctx, next) =>
            {
                if (ctx.User.Identity?.IsAuthenticated != true)
                {
                    var result = await ctx.AuthenticateAsync(schemes);
                    if (result.Succeeded && result.Principal != null)
                    {
                        ctx.User = result.Principal;
                    }
                }

                await next();
            });
        }
    }
}
