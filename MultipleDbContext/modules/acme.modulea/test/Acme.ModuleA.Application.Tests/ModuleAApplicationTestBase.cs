using Volo.Abp.Modularity;

namespace Acme.ModuleA;

/* Inherit from this class for your application layer tests.
 * See SampleAppService_Tests for example.
 */
public abstract class ModuleAApplicationTestBase<TStartupModule> : ModuleATestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
