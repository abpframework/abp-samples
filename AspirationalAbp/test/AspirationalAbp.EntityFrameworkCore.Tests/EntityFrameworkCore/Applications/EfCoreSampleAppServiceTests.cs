using AspirationalAbp.Samples;
using Xunit;

namespace AspirationalAbp.EntityFrameworkCore.Applications;

[Collection(AspirationalAbpTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<AspirationalAbpEntityFrameworkCoreTestModule>
{

}
