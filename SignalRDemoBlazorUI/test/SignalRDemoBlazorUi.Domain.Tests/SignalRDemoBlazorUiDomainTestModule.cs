using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi;

[DependsOn(
    typeof(SignalRDemoBlazorUiDomainModule),
    typeof(SignalRDemoBlazorUiTestBaseModule)
)]
public class SignalRDemoBlazorUiDomainTestModule : AbpModule
{

}
