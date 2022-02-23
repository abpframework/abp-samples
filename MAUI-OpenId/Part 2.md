# Integrating ABP Modules to a MAUI App
The purpose of this article is to integrate ABP Core into the MAUI project and initialize it as an **AbpModule** then make able consuming API using ABP IAppServices.

Before we start, I offer my special thanks to [@hikalkan](https://github.com/hikalkan/maui-abp-playing) because this repository ( [hikalkan/maui-abp-playing](https://github.com/hikalkan/maui-abp-playing) ) is a fantastic inspiration for the purpose of this article.

## Getting Started

In this article, we'll work on an application that was built on previous article: [Integrating MAUI Client via Using OpenID Connect](https://community.abp.io/posts/integrating-maui-client-via-using-openid-connect-aqjjwsdf).


## Configuring ABP Core

As a first step, Dependency Injection will be changed with module initalization. We have to inialize our application as an ABP Module first.

- Add the following dependencies to MAUI Client.

    ```xml
    <PackageReference Include="Volo.Abp.Http.Client.IdentityModel" Version="5.1.3" />
    <PackageReference Include="Volo.Abp.Autofac" Version="5.1.3" />
    ```

- Add HttpApi.Client project reference

    ```xml
    <ProjectReference Include="..\..\aspnet-core\src\Acme.BookStore.HttpApi.Client\Acme.BookStore.HttpApi.Client.csproj" />
    ```
    And run `abp build` command under MAUI application folder.

    > `abp build` command is equivalent of `dotnet build /graphBuild`, it's like a shortcut to graphBuild. The graphBuild finds all dependency tree and build them recursively.
 

- Create **BookStoreMauiClientModule**.

    ```csharp
    using IdentityModel.OidcClient;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Options;
    using Volo.Abp.Autofac;
    using Volo.Abp.Http.Client.IdentityModel;
    using Volo.Abp.Modularity;

    namespace Acme.BookStore.MauiClient;

    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpHttpClientIdentityModelModule),
        typeof(BookStoreHttpApiClientModule)
        )]
    public class BookStoreMauiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();

            Configure<OidcClientOptions>(configuration.GetSection("Oidc:Options"));

            context.Services.AddTransient<OidcClient>(sp =>
            {
                var options = sp.GetRequiredService<IOptions<OidcClientOptions>>().Value;
                options.Browser = sp.GetRequiredService<WebAuthenticatorBrowser>();
                return new OidcClient(options);
            });

            context.Services.AddTransient<HttpClient>(sp =>
                new HttpClient(sp.GetRequiredService<AccessTokenHttpMessageHandler>())
                {
                    // Temporarily. We'll use ABP's Proxy for sendind requests.
                    BaseAddress = new Uri(configuration.GetValue<string>("RemoteServices:Default:BaseUrl"))
                });
        }
    }
    ```

- Mark all dependencies with interfaces for registering as services.

    ```csharp
    internal class WebAuthenticatorBrowser : IBrowser, ITransientDependency
    ```

    ```csharp
    public partial class MainPage : ContentPage, ITransientDependency
    ```

    ```csharp
    public class AccessTokenHttpMessageHandler : DelegatingHandler, ISingletonDependency
    ```

- Add `appsettings.json` file to root path of your application and make it as **Embedded resource**

    ```json
    {
        "Oidc": {
            "Options": {
                "Authority": "https://46fd-45-156-29-175.ngrok.io",
                "ClientId": "BookStore_Maui",
                "RedirectUri": "bookstore://",
                "Scope": "openid email profile role BookStore offline_access",
                "ClientSecret": "1q2w3E*"
            }
        },
        "RemoteServices": {
            "Default": {
                "BaseUrl": "https://46fd-45-156-29-175.ngrok.io"
            }
        }
    }
    ```
 
 - Finally, Go back `MauiApplication.cs` and clear old codes and initialize ABP.

    ```csharp
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.FileProviders;
    using System.Reflection;
    using Volo.Abp;
    using Volo.Abp.Autofac;

    namespace Acme.BookStore.MauiClient;

    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder.ConfigureContainer(new AbpAutofacServiceProviderFactory(new Autofac.ContainerBuilder()), containerBuilder =>
            {

            });
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });

            ConfigureConfiguration(builder);

            builder.Services.AddApplication<BookStoreMauiClientModule>(options =>
            {
                options.Services.ReplaceConfiguration(builder.Configuration);
            });

            var app = builder.Build();

            app.Services.GetRequiredService<IAbpApplicationWithExternalServiceProvider>()
                .Initialize(app.Services);

            return app;
        }

        private static void ConfigureConfiguration(MauiAppBuilder builder)
        {
            var assembly = typeof(App).GetTypeInfo().Assembly;
            builder.Configuration.AddJsonFile(new EmbeddedFileProvider(assembly), "appsettings.json", optional: false, false);
        }
    }
    ```

    Now application is runnable and all behaviors are the same with previos state. But it uses power of ABP right now.



## Configuring Client Proxies

 TODO:...