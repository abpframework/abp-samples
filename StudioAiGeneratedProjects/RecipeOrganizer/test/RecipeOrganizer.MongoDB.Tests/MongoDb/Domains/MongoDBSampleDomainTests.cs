using RecipeOrganizer.Samples;
using Xunit;

namespace RecipeOrganizer.MongoDB.Domains;

[Collection(RecipeOrganizerTestConsts.CollectionDefinitionName)]
public class MongoDBSampleDomainTests : SampleDomainTests<RecipeOrganizerMongoDbTestModule>
{

}
