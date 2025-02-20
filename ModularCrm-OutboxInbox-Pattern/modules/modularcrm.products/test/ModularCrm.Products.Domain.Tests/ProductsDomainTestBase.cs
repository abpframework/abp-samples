using Volo.Abp.Modularity;

namespace ModularCrm.Products;

/* Inherit from this class for your domain layer tests.
 * See SampleManager_Tests for example.
 */
public abstract class ProductsDomainTestBase<TStartupModule> : ProductsTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
