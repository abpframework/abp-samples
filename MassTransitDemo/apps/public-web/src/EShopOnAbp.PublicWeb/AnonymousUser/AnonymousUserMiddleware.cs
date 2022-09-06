using System;
using System.Threading.Tasks;
using EShopOnAbp.Shared.Hosting.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace EShopOnAbp.PublicWeb.AnonymousUser;

public class AnonymousUserMiddleware
{
    private readonly RequestDelegate _next;

    public AnonymousUserMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Method == "GET")
        {
            context.Request.Cookies.TryGetValue(EShopConstants.AnonymousUserClaimName, out string anonymousUserId);
            // Generate guid for anonymous user id and set to cookie for 14 days
            if (string.IsNullOrEmpty(anonymousUserId))
            {
                anonymousUserId = Guid.NewGuid().ToString();
                context.Response.Cookies.Append(EShopConstants.AnonymousUserClaimName, anonymousUserId,
                    new CookieOptions
                    {
                        SameSite = SameSiteMode.Lax,
                        Expires = DateTimeOffset.UtcNow.AddDays(14)
                    });
            }
        }
        await _next(context);
    }
}

public static class AnonymousUserApplicationBuilderExtensions
{
    public static IApplicationBuilder UseAnonymousUser(this IApplicationBuilder app)
    {
        app.UseMiddleware<AnonymousUserMiddleware>();
        return app;
    }
}