using TextTemplateDemo.Localization;
using Volo.Abp.Autofac;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplating.Scriban;
using Volo.Abp.VirtualFileSystem;

namespace TextTemplateDemo
{
    [DependsOn(
        typeof(AbpTextTemplatingScribanModule),
        typeof(AbpLocalizationModule),
        typeof(AbpAutofacModule)
    )]
    public class TextTemplateDemoModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<TextTemplateDemoModule>("TextTemplateDemo");
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources.Add<DemoResource>("en")
                    .AddVirtualJson("/Localization");

                //If you define this, no need to set localization resource to the templates
                options.DefaultResourceType = typeof(DemoResource);
            });
        }
    }
}
