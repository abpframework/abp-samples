using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace TodoApp.Web
{
    [Dependency(ReplaceServices = true)]
    public class TodoAppBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "TodoApp";
    }
}
