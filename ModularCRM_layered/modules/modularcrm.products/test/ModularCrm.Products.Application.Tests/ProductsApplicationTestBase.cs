using Volo.Abp.Modularity;

namespace ModularCrm.Products;

/* Inherit from this class for your application layer tests.
 * See SampleAppService_Tests for example.
 */
public abstract class ProductsApplicationTestBase<TStartupModule> : ProductsTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
