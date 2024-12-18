using Xunit;

namespace ModularCrm.EntityFrameworkCore;

[CollectionDefinition(ModularCrmTestConsts.CollectionDefinitionName)]
public class ModularCrmEntityFrameworkCoreCollection : ICollectionFixture<ModularCrmEntityFrameworkCoreFixture>
{

}
