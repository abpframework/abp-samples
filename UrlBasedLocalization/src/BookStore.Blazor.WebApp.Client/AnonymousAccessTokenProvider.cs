using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;

namespace BookStore.Blazor.WebApp.Client;

/// <summary>
/// Anonymous access token provider for no-auth WASM demo.
/// </summary>
public class AnonymousAccessTokenProvider : IAccessTokenProvider
{
    public ValueTask<AccessTokenResult> RequestAccessToken()
        => ValueTask.FromResult(new AccessTokenResult(AccessTokenResultStatus.RequiresRedirect, null, null, null));

    public ValueTask<AccessTokenResult> RequestAccessToken(AccessTokenRequestOptions options)
        => ValueTask.FromResult(new AccessTokenResult(AccessTokenResultStatus.RequiresRedirect, null, null, null));
}
