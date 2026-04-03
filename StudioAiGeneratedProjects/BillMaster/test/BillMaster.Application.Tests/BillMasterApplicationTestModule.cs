using Volo.Abp.Modularity;

namespace BillMaster;

[DependsOn(
    typeof(BillMasterApplicationModule),
    typeof(BillMasterDomainTestModule)
)]
public class BillMasterApplicationTestModule : AbpModule
{

}
