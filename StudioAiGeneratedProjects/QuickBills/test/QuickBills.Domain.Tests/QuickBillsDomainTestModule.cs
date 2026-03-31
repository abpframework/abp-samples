using Volo.Abp.Modularity;

namespace QuickBills;

[DependsOn(
    typeof(QuickBillsDomainModule),
    typeof(QuickBillsTestBaseModule)
)]
public class QuickBillsDomainTestModule : AbpModule
{

}
