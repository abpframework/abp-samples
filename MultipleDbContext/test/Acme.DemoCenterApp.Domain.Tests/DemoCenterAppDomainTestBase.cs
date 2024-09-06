using Volo.Abp.Modularity;

namespace Acme.DemoCenterApp;

/* Inherit from this class for your domain layer tests. */
public abstract class DemoCenterAppDomainTestBase<TStartupModule> : DemoCenterAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
