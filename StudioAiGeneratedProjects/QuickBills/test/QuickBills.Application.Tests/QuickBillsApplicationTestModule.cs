using Volo.Abp.Modularity;

namespace QuickBills;

[DependsOn(
    typeof(QuickBillsApplicationModule),
    typeof(QuickBillsDomainTestModule)
)]
public class QuickBillsApplicationTestModule : AbpModule
{

}
