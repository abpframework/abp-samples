using Volo.Abp.Modularity;

namespace Acme.BookStore.AngularMaterial
{
    [DependsOn(
        typeof(AngularMaterialApplicationModule),
        typeof(AngularMaterialDomainTestModule)
        )]
    public class AngularMaterialApplicationTestModule : AbpModule
    {

    }
}