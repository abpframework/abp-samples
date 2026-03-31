using Volo.Abp.Modularity;

namespace QuickBills;

public abstract class QuickBillsApplicationTestBase<TStartupModule> : QuickBillsTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
