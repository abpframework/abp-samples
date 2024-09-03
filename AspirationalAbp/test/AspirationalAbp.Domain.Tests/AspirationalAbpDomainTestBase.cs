using Volo.Abp.Modularity;

namespace AspirationalAbp;

/* Inherit from this class for your domain layer tests. */
public abstract class AspirationalAbpDomainTestBase<TStartupModule> : AspirationalAbpTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
