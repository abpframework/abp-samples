using EShopOnAbp.Shared.Hosting.Gateways;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using EShopOnAbp.Shared.Hosting.AspNetCore;
using Microsoft.AspNetCore.Http;
using Volo.Abp;
using Volo.Abp.Modularity;
using Microsoft.AspNetCore.Rewrite;

namespace EShopOnAbp.WebPublicGateway;

[DependsOn(
    typeof(EShopOnAbpSharedHostingGatewaysModule)
)]
public class EShopOnAbpWebPublicGatewayModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();
        var hostingEnvironment = context.Services.GetHostingEnvironment();

        SwaggerConfigurationHelper.ConfigureWithAuth(
            context: context,
            authority: configuration["AuthServer:Authority"],
            scopes: new Dictionary<string, string> /* Requested scopes for authorization code request and descriptions for swagger UI only */
            {
                { "AccountService", "Account Service API" },
                { "IdentityService", "Identity Service API" },
                { "AdministrationService", "Administration Service API" },
                { "CatalogService", "Catalog Service API" },
                { "BasketService", "Basket Service API" },
                { "PaymentService", "Payment Service API" },
                { "OrderingService", "Ordering Service API" },
            },
            apiTitle: "WebPublic Gateway"
        );

        // context.Services.AddReverseProxy()
        //     .LoadFromConfig(configuration.GetSection("ReverseProxy"));
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseCorrelationId();
        app.UseAbpSerilogEnrichers();
        app.UseSwaggerUIWithYarp(context);
        
        app.UseRewriter(new RewriteOptions()
            // Regex for "", "/" and "" (whitespace)
            .AddRedirect("^(|\\|\\s+)$", "/swagger"));
        
        app.UseRouting();
        app.UseEndpoints(endpoints =>
        {
            endpoints.MapGet("", ctx => ctx.Response.WriteAsync("YAG"));
            endpoints.MapReverseProxy();
        });
    }
}