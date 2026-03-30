using RecipeOrganizer.MongoDB;
using RecipeOrganizer.Samples;
using Xunit;

namespace RecipeOrganizer.MongoDb.Applications;

[Collection(RecipeOrganizerTestConsts.CollectionDefinitionName)]
public class MongoDBSampleAppServiceTests : SampleAppServiceTests<RecipeOrganizerMongoDbTestModule>
{

}
