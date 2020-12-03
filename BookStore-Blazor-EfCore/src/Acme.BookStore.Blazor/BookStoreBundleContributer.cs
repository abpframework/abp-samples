using Volo.Abp.Bundling;

namespace Acme.BookStore.Blazor
{
    public class BookStoreBundleContributer : IBundleContributer
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
