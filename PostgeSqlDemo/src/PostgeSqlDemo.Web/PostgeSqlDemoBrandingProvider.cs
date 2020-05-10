using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace PostgeSqlDemo.Web
{
    [Dependency(ReplaceServices = true)]
    public class PostgeSqlDemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PostgeSqlDemo";
    }
}
