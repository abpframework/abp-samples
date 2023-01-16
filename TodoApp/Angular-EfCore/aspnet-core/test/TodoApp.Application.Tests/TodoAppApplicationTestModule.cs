using Volo.Abp.Modularity;

namespace TodoApp;

[DependsOn(
    typeof(TodoAppApplicationModule),
    typeof(TodoAppDomainTestModule)
    )]
public class TodoAppApplicationTestModule : AbpModule
{

}
