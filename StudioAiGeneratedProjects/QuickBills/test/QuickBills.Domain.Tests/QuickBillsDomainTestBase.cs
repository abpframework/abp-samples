using Volo.Abp.Modularity;

namespace QuickBills;

/* Inherit from this class for your domain layer tests. */
public abstract class QuickBillsDomainTestBase<TStartupModule> : QuickBillsTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
