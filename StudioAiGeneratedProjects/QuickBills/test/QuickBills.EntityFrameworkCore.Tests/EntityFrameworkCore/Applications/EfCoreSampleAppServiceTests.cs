using QuickBills.Samples;
using Xunit;

namespace QuickBills.EntityFrameworkCore.Applications;

[Collection(QuickBillsTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<QuickBillsEntityFrameworkCoreTestModule>
{

}
