using MovieCollectionApp.MongoDB;
using MovieCollectionApp.Samples;
using Xunit;

namespace MovieCollectionApp.MongoDb.Applications;

[Collection(MovieCollectionAppTestConsts.CollectionDefinitionName)]
public class MongoDBSampleAppServiceTests : SampleAppServiceTests<MovieCollectionAppMongoDbTestModule>
{

}
