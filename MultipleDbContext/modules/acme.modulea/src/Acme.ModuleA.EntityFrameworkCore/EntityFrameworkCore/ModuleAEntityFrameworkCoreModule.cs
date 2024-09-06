using Acme.ModuleA.Contacts;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Acme.ModuleA.EntityFrameworkCore;

[DependsOn(
    typeof(ModuleADomainModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class ModuleAEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<ModuleADbContext>(options =>
        {
            options.AddRepository<Contact, EfCoreContactRepository>();
        });
    }
}