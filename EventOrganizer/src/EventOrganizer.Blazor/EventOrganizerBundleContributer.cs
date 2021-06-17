using Volo.Abp.Bundling;

namespace EventOrganizer.Blazor
{
    public class EventOrganizerBundleContributer : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {
        }

        public void AddStyles(BundleContext context)
        {
            context.Add("main.css", true);
        }
    }
}
