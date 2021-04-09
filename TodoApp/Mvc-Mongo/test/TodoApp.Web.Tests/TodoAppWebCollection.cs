using TodoApp.MongoDB;
using Xunit;

namespace TodoApp
{
    [CollectionDefinition(TodoAppTestConsts.CollectionDefinitionName)]
    public class TodoAppWebCollection : TodoAppMongoDbCollectionFixtureBase
    {

    }
}
