using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo.Demos.WelcomeEmail
{
    public class WelcomeEmailDemo : ITransientDependency
    {
        private readonly ITemplateRenderer _templateRenderer;

        public WelcomeEmailDemo(ITemplateRenderer templateRenderer)
        {
            _templateRenderer = templateRenderer;
        }

        public async Task RunAsync(string cultureName)
        {
            var result = await _templateRenderer.RenderAsync(
                "WelcomeEmail",
                cultureName: cultureName
            );

            Console.WriteLine(result);
        }
    }
}
