using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi;

public abstract class SignalRDemoBlazorUiApplicationTestBase<TStartupModule> : SignalRDemoBlazorUiTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
