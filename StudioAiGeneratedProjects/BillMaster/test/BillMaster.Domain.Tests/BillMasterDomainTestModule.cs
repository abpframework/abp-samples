using Volo.Abp.Modularity;

namespace BillMaster;

[DependsOn(
    typeof(BillMasterDomainModule),
    typeof(BillMasterTestBaseModule)
)]
public class BillMasterDomainTestModule : AbpModule
{

}
