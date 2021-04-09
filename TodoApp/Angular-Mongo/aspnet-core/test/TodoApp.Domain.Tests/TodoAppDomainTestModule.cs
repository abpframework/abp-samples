using TodoApp.MongoDB;
using Volo.Abp.Modularity;

namespace TodoApp
{
    [DependsOn(
        typeof(TodoAppMongoDbTestModule)
        )]
    public class TodoAppDomainTestModule : AbpModule
    {

    }
}