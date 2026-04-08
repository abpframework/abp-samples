# URL-Based Localization Sample

This sample demonstrates ABP's **URL-based localization** feature, where the current culture is embedded directly in the URL path (e.g., `/tr/about` or `/en/about`).

See the documentation: **https://abp.io/docs/latest/framework/fundamentals/url-based-localization**

## Demo Projects

| Project | UI Type | Port |
|---|---|---|
| `BookStore.Mvc` | MVC / Razor Pages | `https://localhost:44335` |
| `BookStore.Blazor.Server` | Blazor Server | `https://localhost:44336` |
| `BookStore.Blazor.WebApp` + `BookStore.Blazor.WebApp.Client` | Blazor WebApp (InteractiveAuto) | `https://localhost:44337` |

## Running

```bash
# MVC
dotnet run --project src/BookStore.Mvc

# Blazor Server
dotnet run --project src/BookStore.Blazor.Server

# Blazor WebApp (InteractiveAuto)
dotnet run --project src/BookStore.Blazor.WebApp
```

Navigate to the corresponding URL (e.g., `https://localhost:44337/en/`) and use the language switcher in the top bar.

## Configuration

```csharp
Configure<AbpRequestLocalizationOptions>(options =>
{
    options.UseRouteBasedCulture = true;
});
```

> `UseAbpRequestLocalization()` must be called after `UseRouting()` in the middleware pipeline.

## Supported Languages

- English (`/en/`)
- Türkçe (`/tr/`)
- Français (`/fr/`)
- 简体中文 (`/zh-Hans/`)
