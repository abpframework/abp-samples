using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Authorization;

namespace BookStore.Blazor.WebApp.Client;

/// <summary>
/// Anonymous auth state provider for no-auth WASM demo.
/// </summary>
public class AnonymousAuthStateProvider : AuthenticationStateProvider
{
    public override Task<AuthenticationState> GetAuthenticationStateAsync()
        => Task.FromResult(new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity())));
}
