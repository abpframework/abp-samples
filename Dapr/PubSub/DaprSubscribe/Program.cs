using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc.Dapr.EventBus;
using Volo.Abp.Autofac;
using Volo.Abp.Dapr;
using Volo.Abp.EventBus.Dapr;
using Volo.Abp.Modularity;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseAutofac();
await builder.AddApplicationAsync<AppModule>();

var app = builder.Build();

await app.InitializeApplicationAsync();
await app.RunAsync();

[DependsOn(typeof(AbpAutofacModule), typeof(AbpAspNetCoreMvcDaprEventBusModule))]
public class AppModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddEndpointsApiExplorer();
        context.Services.AddSwaggerGen();

        Configure<AbpDaprOptions>(options =>
        {
            options.HttpEndpoint = "http://localhost:7002";
            options.GrpcEndpoint = "http://localhost:7003";
        });

        Configure<AbpDaprEventBusOptions>(options =>
        {
            options.PubSubName = "test-pubsub";
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseSwagger();
        app.UseSwaggerUI();
        app.UseRouting();
        app.UseCloudEvents();
        app.UseConfiguredEndpoints();
    }
}
