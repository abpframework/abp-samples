using Acme.DemoCenterApp.Samples;
using Xunit;

namespace Acme.DemoCenterApp.EntityFrameworkCore.Applications;

[Collection(DemoCenterAppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<DemoCenterAppEntityFrameworkCoreTestModule>
{

}
