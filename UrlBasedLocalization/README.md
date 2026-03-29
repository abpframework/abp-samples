# URL-Based Localization Sample

This sample demonstrates ABP's **URL-based localization** feature, where the current culture is embedded directly in the URL path (e.g., `/tr/about` or `/en/about`).

See the documentation: **https://abp.io/docs/latest/framework/fundamentals/url-based-localization**

## Running

```bash
dotnet run --project src/UrlBasedLocalizationSample
```

Navigate to `https://localhost:44335/en/` and use the language switcher in the top bar.

## Configuration

The only required configuration is a single option:

```csharp
Configure<AbpRequestLocalizationOptions>(options =>
{
    options.UseRouteBasedCulture = true;
});
```

ABP automatically handles route registration, URL generation, menu links, and language switching.

> `UseAbpRequestLocalization()` must be called after `UseRouting()` in the middleware pipeline.

## Supported Languages

- English (`/en/`)
- Türkçe (`/tr/`)
- Français (`/fr/`)
- 简体中文 (`/zh-Hans/`)
