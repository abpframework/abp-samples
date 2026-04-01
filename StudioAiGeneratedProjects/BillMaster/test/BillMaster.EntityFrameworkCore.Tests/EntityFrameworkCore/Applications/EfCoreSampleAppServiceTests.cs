using BillMaster.Samples;
using Xunit;

namespace BillMaster.EntityFrameworkCore.Applications;

[Collection(BillMasterTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<BillMasterEntityFrameworkCoreTestModule>
{

}
