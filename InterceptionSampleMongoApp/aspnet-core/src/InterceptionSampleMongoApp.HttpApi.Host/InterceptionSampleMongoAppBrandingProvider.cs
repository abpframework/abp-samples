using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace InterceptionSampleMongoApp;

[Dependency(ReplaceServices = true)]
public class InterceptionSampleMongoAppBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "InterceptionSampleMongoApp";
}
