using Acme.BookStore.MongoDB;
using Xunit;

namespace Acme.BookStore;

[CollectionDefinition(BookStoreTestConsts.CollectionDefinitionName)]
public class BookStoreApplicationCollection : BookStoreMongoDbCollectionFixtureBase
{

}
