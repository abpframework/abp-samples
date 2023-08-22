using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace SwaggerDemo;

[Dependency(ReplaceServices = true)]
public class SwaggerDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "SwaggerDemo";
}
