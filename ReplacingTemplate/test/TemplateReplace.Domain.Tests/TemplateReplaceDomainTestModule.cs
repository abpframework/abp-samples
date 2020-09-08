using TemplateReplace.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TemplateReplace
{
    [DependsOn(
        typeof(TemplateReplaceEntityFrameworkCoreTestModule)
        )]
    public class TemplateReplaceDomainTestModule : AbpModule
    {

    }
}