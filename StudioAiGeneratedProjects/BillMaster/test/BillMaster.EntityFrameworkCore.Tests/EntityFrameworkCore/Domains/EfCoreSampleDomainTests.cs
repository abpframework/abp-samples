using BillMaster.Samples;
using Xunit;

namespace BillMaster.EntityFrameworkCore.Domains;

[Collection(BillMasterTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<BillMasterEntityFrameworkCoreTestModule>
{

}
