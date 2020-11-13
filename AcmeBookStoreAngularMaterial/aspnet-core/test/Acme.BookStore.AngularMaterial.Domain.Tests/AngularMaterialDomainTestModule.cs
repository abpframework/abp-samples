using Acme.BookStore.AngularMaterial.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Acme.BookStore.AngularMaterial
{
    [DependsOn(
        typeof(AngularMaterialEntityFrameworkCoreTestModule)
        )]
    public class AngularMaterialDomainTestModule : AbpModule
    {

    }
}