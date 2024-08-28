using Volo.Abp.Modularity;

namespace ModularCrm;

/* Inherit from this class for your domain layer tests. */
public abstract class ModularCrmDomainTestBase<TStartupModule> : ModularCrmTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
