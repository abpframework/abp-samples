using Volo.Abp.Modularity;

namespace Acme.DemoCenterApp;

public abstract class DemoCenterAppApplicationTestBase<TStartupModule> : DemoCenterAppTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
