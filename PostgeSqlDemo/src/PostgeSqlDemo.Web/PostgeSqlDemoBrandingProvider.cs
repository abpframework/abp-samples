using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace PostgeSqlDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class PostgeSqlDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PostgeSqlDemo";
    }
}
