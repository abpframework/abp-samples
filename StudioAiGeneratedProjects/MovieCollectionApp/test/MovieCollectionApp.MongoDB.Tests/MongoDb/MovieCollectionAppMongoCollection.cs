using Xunit;

namespace MovieCollectionApp.MongoDB;

[CollectionDefinition(MovieCollectionAppTestConsts.CollectionDefinitionName)]
public class MovieCollectionAppMongoCollection : MovieCollectionAppMongoDbCollectionFixtureBase
{

}
