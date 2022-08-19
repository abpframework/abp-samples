# Blazor WebAssembly Asp.NET Core Hosted

Microsoft provides a template named Blazor WebAssembly Asp.NET Core Hosted. This template is a Blazor WebAssembly application that hosts a Blazor WebAssembly application. Basically, `HttpApi.Host` and `Blazor` applications are hosted together. In this case, only one application will be deployed and blazor application will be served by the HttpApi.Host.

## Instructions

- Create a new ABP Application with Blazor UI

    ```bash
    abp new BookStore -u blazor -t app -v 6.0.0-rc.2
    ```

- Add Blazor project reference and `Microsoft.AspNetCore.Components.WebAssembly.Server` package reference to the HttpApi.Host project.
    ```xml
    <ItemGroup>
        <ProjectReference Include="..\BookStore.Blazor\BookStore.Blazor.csproj" />
        <PackageReference Include="Microsoft.AspNetCore.Components.WebAssembly.Server" Version="6.0.8" />
    </ItemGroup>
    ```

- Add Blazor framework files middleware into **OnApplicationInitializaiton** method in `BookStoreHttpApiHostModule.cs` file.
    ```cs
    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        // ...

        app.UseBlazorFrameworkFiles(); // 👈 Make sure it's before UseStaticFiles()

        app.UseStaticFiles();

        // ...
    }
    ```

- Add a mapping for fallback to index.html file at the end of the **OnApplicationInitializaiton** method in `BookStoreHttpApiHostModule.cs` file.

    ```cs
    if (app is WebApplication webApp)
    {
        webApp.MapFallbackToFile("index.html");
    }
    ```