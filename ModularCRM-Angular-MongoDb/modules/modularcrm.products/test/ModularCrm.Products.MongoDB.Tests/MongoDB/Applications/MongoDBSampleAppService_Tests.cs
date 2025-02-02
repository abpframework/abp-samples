using ModularCrm.Products.MongoDB;
using ModularCrm.Products.Samples;
using Xunit;

namespace ModularCrm.Products.MongoDb.Applications;

[Collection(MongoTestCollection.Name)]
public class MongoDBSampleAppService_Tests : SampleAppService_Tests<ProductsMongoDbTestModule>
{

}
