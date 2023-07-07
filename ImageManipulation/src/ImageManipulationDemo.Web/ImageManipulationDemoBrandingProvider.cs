using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ImageManipulationDemo.Web;

[Dependency(ReplaceServices = true)]
public class ImageManipulationDemoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "ImageManipulationDemo";
}
