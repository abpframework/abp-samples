using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FileActionsDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class FileActionsDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "FileActionsDemo";
    }
}
