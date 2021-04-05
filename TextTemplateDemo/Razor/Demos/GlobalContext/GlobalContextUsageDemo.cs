using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo.Demos.GlobalContext
{
    public class GlobalContextUsageDemo : ITransientDependency
    {
        private readonly ITemplateRenderer _templateRenderer;

        public GlobalContextUsageDemo(ITemplateRenderer templateRenderer)
        {
            _templateRenderer = templateRenderer;
        }

        public async Task RunAsync()
        {
            var result = await _templateRenderer.RenderAsync(
                "GlobalContextUsage",
                globalContext: new Dictionary<string, object>
                {
                    {"myGlobalObject", "TEST VALUE"}
                }
            );

            Console.WriteLine(result);
        }
    }
}
