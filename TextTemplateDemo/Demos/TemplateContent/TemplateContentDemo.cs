using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo.Demos.TemplateContent
{
    public class TemplateContentDemo : ITransientDependency
    {
        private readonly ITemplateContentProvider _templateContentProvider;

        public TemplateContentDemo(ITemplateContentProvider templateContentProvider)
        {
            _templateContentProvider = templateContentProvider;
        }

        public async Task RunAsync()
        {
            var result = await _templateContentProvider
                .GetContentOrNullAsync("Hello");

            Console.WriteLine(result);
        }
    }
}
