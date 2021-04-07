using TodoApp.MongoDB;
using Xunit;

namespace TodoApp
{
    [CollectionDefinition(TodoAppTestConsts.CollectionDefinitionName)]
    public class TodoAppDomainCollection : TodoAppMongoDbCollectionFixtureBase
    {

    }
}
