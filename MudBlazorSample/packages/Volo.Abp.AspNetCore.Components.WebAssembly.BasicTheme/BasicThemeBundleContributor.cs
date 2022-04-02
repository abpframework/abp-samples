using Volo.Abp.Bundling;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.BasicTheme;

public class BasicThemeBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {
        context.Add("_content/MudBlazor/MudBlazor.min.js");
    }

    public void AddStyles(BundleContext context)
    {
        context.Add("_content/Volo.Abp.AspNetCore.Components.Web.BasicTheme/libs/abp/css/theme.css");

        context.Add("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
        context.Add("_content/MudBlazor/MudBlazor.min.css");
    }
}