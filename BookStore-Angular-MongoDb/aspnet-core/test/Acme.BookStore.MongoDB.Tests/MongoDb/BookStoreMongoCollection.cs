using Xunit;

namespace Acme.BookStore.MongoDB;

[CollectionDefinition(BookStoreTestConsts.CollectionDefinitionName)]
public class BookStoreMongoCollection : BookStoreMongoDbCollectionFixtureBase
{

}
