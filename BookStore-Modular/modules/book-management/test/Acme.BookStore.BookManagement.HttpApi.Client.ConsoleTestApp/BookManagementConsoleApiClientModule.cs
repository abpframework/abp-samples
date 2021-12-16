using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;
using Volo.Abp.Autofac;

namespace Acme.BookStore.BookManagement
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(BookManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class BookManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
