using Volo.Abp.Bundling;

namespace Acme.BookStore.Blazor
{
    public class BookStoreBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {
        }

        public void AddStyles(BundleContext context)
        {
            context.Add("main.css");
        }
    }
}
