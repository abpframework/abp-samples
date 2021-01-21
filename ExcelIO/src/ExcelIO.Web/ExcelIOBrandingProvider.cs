using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace ExcelIO.Web
{
    [Dependency(ReplaceServices = true)]
    public class ExcelIOBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ExcelIO";
    }
}
