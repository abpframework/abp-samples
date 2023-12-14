using SignalRDemoBlazorUi.Samples;
using Xunit;

namespace SignalRDemoBlazorUi.MongoDB.Domains;

[Collection(SignalRDemoBlazorUiTestConsts.CollectionDefinitionName)]
public class MongoDBSampleDomainTests : SampleDomainTests<SignalRDemoBlazorUiMongoDbTestModule>
{

}
