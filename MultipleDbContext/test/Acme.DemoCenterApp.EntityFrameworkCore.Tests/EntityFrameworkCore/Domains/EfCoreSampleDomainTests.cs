using Acme.DemoCenterApp.Samples;
using Xunit;

namespace Acme.DemoCenterApp.EntityFrameworkCore.Domains;

[Collection(DemoCenterAppTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<DemoCenterAppEntityFrameworkCoreTestModule>
{

}
