using Volo.Abp.Modularity;

namespace SignalRDemoBlazorUi;

[DependsOn(
    typeof(SignalRDemoBlazorUiApplicationModule),
    typeof(SignalRDemoBlazorUiDomainTestModule)
)]
public class SignalRDemoBlazorUiApplicationTestModule : AbpModule
{

}
