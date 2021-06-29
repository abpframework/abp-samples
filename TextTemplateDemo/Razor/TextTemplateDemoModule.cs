using Microsoft.CodeAnalysis;
using TextTemplateDemo.Localization;
using Volo.Abp.Autofac;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplating.Razor;
using Volo.Abp.VirtualFileSystem;

namespace TextTemplateDemo
{
    [DependsOn(
        typeof(AbpTextTemplatingRazorModule),
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

            Configure<AbpRazorTemplateCSharpCompilerOptions>(options =>
            {
                options.References.Add(MetadataReference.CreateFromFile(typeof(TextTemplateDemoModule).Assembly.Location));
            });
        }
    }
}
