using Xunit;

namespace BillMaster.EntityFrameworkCore;

[CollectionDefinition(BillMasterTestConsts.CollectionDefinitionName)]
public class BillMasterEntityFrameworkCoreCollection : ICollectionFixture<BillMasterEntityFrameworkCoreFixture>
{

}
