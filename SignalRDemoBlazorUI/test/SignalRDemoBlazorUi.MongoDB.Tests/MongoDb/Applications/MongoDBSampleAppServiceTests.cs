using SignalRDemoBlazorUi.MongoDB;
using SignalRDemoBlazorUi.Samples;
using Xunit;

namespace SignalRDemoBlazorUi.MongoDb.Applications;

[Collection(SignalRDemoBlazorUiTestConsts.CollectionDefinitionName)]
public class MongoDBSampleAppServiceTests : SampleAppServiceTests<SignalRDemoBlazorUiMongoDbTestModule>
{

}
