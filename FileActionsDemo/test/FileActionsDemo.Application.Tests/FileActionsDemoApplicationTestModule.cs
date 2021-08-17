using Volo.Abp.Modularity;

namespace FileActionsDemo
{
    [DependsOn(
        typeof(FileActionsDemoApplicationModule),
        typeof(FileActionsDemoDomainTestModule)
        )]
    public class FileActionsDemoApplicationTestModule : AbpModule
    {

    }
}