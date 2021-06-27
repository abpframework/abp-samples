using Xunit;

namespace TodoApp.MongoDB
{
    [CollectionDefinition(TodoAppTestConsts.CollectionDefinitionName)]
    public class TodoAppMongoCollection : TodoAppMongoDbCollectionFixtureBase
    {

    }
}
