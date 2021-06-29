using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo.Other
{
    public class MyTemplateContentProvider : ITemplateContentContributor, ITransientDependency
    {
        public async Task<string> GetOrNullAsync(TemplateContentContributorContext context)
        {
            var templateName = context.TemplateDefinition.Name;

            //TODO: Try to find content from another source
            return null;
        }
    }
}
