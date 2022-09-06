using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Volo.Abp.Modularity;

namespace EShopOnAbp.Shared.Hosting.AspNetCore;

public static class ApplicationBuilderHelper
{
    public static async Task<WebApplication> BuildApplicationAsync<TStartupModule>(string[] args)
        where TStartupModule : IAbpModule
    {
        var builder = WebApplication.CreateBuilder(args);
        builder.Host
            .AddAppSettingsSecretsJson()
            .UseAutofac()
            .UseSerilog();

        await builder.AddApplicationAsync<TStartupModule>();
        return builder.Build();
    }
}