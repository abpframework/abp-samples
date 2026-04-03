using Volo.Abp.Modularity;

namespace BillMaster;

/* Inherit from this class for your domain layer tests. */
public abstract class BillMasterDomainTestBase<TStartupModule> : BillMasterTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
