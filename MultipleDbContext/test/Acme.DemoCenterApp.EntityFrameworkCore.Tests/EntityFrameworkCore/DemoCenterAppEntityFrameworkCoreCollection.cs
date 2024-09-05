using Xunit;

namespace Acme.DemoCenterApp.EntityFrameworkCore;

[CollectionDefinition(DemoCenterAppTestConsts.CollectionDefinitionName)]
public class DemoCenterAppEntityFrameworkCoreCollection : ICollectionFixture<DemoCenterAppEntityFrameworkCoreFixture>
{

}
