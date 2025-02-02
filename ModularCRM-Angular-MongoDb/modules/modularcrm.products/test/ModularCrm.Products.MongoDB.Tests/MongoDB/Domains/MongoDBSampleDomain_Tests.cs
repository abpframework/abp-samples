using ModularCrm.Products.Samples;
using Xunit;

namespace ModularCrm.Products.MongoDB.Domains;

[Collection(MongoTestCollection.Name)]
public class MongoDBSampleDomain_Tests : SampleManager_Tests<ProductsMongoDbTestModule>
{

}
