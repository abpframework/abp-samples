using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi;

/* Inherit from this class for your domain layer tests. */
public abstract class SignalRDemoBlazorUiDomainTestBase<TStartupModule> : SignalRDemoBlazorUiTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
