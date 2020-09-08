using Volo.Abp.Modularity;

namespace TemplateReplace
{
    [DependsOn(
        typeof(TemplateReplaceApplicationModule),
        typeof(TemplateReplaceDomainTestModule)
        )]
    public class TemplateReplaceApplicationTestModule : AbpModule
    {

    }
}