using QuickBills.Samples;
using Xunit;

namespace QuickBills.EntityFrameworkCore.Domains;

[Collection(QuickBillsTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<QuickBillsEntityFrameworkCoreTestModule>
{

}
