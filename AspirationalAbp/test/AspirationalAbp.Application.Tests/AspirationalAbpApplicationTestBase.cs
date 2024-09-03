using Volo.Abp.Modularity;

namespace AspirationalAbp;

public abstract class AspirationalAbpApplicationTestBase<TStartupModule> : AspirationalAbpTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
