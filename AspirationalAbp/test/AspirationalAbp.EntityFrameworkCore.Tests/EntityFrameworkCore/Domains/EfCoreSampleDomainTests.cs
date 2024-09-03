using AspirationalAbp.Samples;
using Xunit;

namespace AspirationalAbp.EntityFrameworkCore.Domains;

[Collection(AspirationalAbpTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<AspirationalAbpEntityFrameworkCoreTestModule>
{

}
