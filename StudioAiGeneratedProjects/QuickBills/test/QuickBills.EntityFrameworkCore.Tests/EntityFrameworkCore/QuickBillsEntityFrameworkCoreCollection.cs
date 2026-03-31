using Xunit;

namespace QuickBills.EntityFrameworkCore;

[CollectionDefinition(QuickBillsTestConsts.CollectionDefinitionName)]
public class QuickBillsEntityFrameworkCoreCollection : ICollectionFixture<QuickBillsEntityFrameworkCoreFixture>
{

}
