using Volo.Abp.Modularity;

namespace Acme.ModuleA;

/* Inherit from this class for your domain layer tests.
 * See SampleManager_Tests for example.
 */
public abstract class ModuleADomainTestBase<TStartupModule> : ModuleATestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
