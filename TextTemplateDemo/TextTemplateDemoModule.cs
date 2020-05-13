using Volo.Abp.Autofac;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplating;
using Volo.Abp.VirtualFileSystem;

namespace TextTemplateDemo
{
    [DependsOn(
        typeof(AbpTextTemplatingModule),
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
        }
    }
}
