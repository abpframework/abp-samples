using Microsoft.AspNetCore.Mvc.ApplicationParts;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.Modularity;

namespace MyPlugIn;

[DependsOn(typeof(AbpAspNetCoreMvcUiThemeSharedModule))]
public class MyPlugInModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            //Add plugin assembly
            mvcBuilder.PartManager.ApplicationParts.Add(new AssemblyPart(typeof(MyPlugInModule).Assembly));

            //Add CompiledRazorAssemblyPart if the PlugIn module contains razor views.
            mvcBuilder.PartManager.ApplicationParts.Add(new CompiledRazorAssemblyPart(typeof(MyPlugInModule).Assembly));
        });
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var myService = context.ServiceProvider
            .GetRequiredService<MyService>();

        myService.Initialize();
    }
}
