using Volo.Abp.Modularity;

namespace ModularCrm;

public abstract class ModularCrmApplicationTestBase<TStartupModule> : ModularCrmTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
