using FileActionsDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FileActionsDemo
{
    [DependsOn(
        typeof(FileActionsDemoEntityFrameworkCoreTestModule)
        )]
    public class FileActionsDemoDomainTestModule : AbpModule
    {

    }
}