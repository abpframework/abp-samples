using Volo.Abp.Modularity;

namespace BillMaster;

public abstract class BillMasterApplicationTestBase<TStartupModule> : BillMasterTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
