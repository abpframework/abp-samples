using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client;

namespace KeycloakDemo.Web.Identity;

internal class IdentityProfileLoginUpdater : ITransientDependency
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IRemoteServiceConfigurationProvider _remoteServiceConfigurationProvider;

    public IdentityProfileLoginUpdater(
        IHttpClientFactory httpClientFactory,
        IRemoteServiceConfigurationProvider remoteServiceConfigurationProvider)
    {
        _httpClientFactory = httpClientFactory;
        _remoteServiceConfigurationProvider = remoteServiceConfigurationProvider;
    }

    public async Task UpdateAsync(JwtSecurityToken token)
    {
        using(var httpClient = _httpClientFactory.CreateClient("app"))
        {
            var remoteServiceConfiguration = await _remoteServiceConfigurationProvider.GetConfigurationOrDefaultAsync("app");

            httpClient.BaseAddress = new Uri(remoteServiceConfiguration.BaseUrl);
            httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer " + token.RawData);

            var response = await httpClient.PostAsync("/api/identity-profile/create-or-update", new StringContent(string.Empty));

            response.EnsureSuccessStatusCode();
        }
    }
}
