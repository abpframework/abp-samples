using ModularCrm.Samples;
using Xunit;

namespace ModularCrm.EntityFrameworkCore.Domains;

[Collection(ModularCrmTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<ModularCrmEntityFrameworkCoreTestModule>
{

}
