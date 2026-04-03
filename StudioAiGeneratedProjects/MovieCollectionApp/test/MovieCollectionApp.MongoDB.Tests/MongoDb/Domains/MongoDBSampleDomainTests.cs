using MovieCollectionApp.Samples;
using Xunit;

namespace MovieCollectionApp.MongoDB.Domains;

[Collection(MovieCollectionAppTestConsts.CollectionDefinitionName)]
public class MongoDBSampleDomainTests : SampleDomainTests<MovieCollectionAppMongoDbTestModule>
{

}
