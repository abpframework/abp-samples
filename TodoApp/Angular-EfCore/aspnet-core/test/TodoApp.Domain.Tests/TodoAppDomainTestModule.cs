using TodoApp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TodoApp;

[DependsOn(
    typeof(TodoAppEntityFrameworkCoreTestModule)
    )]
public class TodoAppDomainTestModule : AbpModule
{

}
