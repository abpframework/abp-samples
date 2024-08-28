using ModularCrm.Samples;
using Xunit;

namespace ModularCrm.EntityFrameworkCore.Applications;

[Collection(ModularCrmTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<ModularCrmEntityFrameworkCoreTestModule>
{

}
