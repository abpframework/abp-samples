using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo.Demos.PasswordReset
{
    public class PasswordResetDemo : ITransientDependency
    {
        private readonly ITemplateRenderer _templateRenderer;

        public PasswordResetDemo(ITemplateRenderer templateRenderer)
        {
            _templateRenderer = templateRenderer;
        }

        public async Task RunAsync()
        {
            var result = await _templateRenderer.RenderAsync(
                "PasswordReset", //the template name
                new PasswordResetModel
                {
                    Link = "https://abp.io/example-link?userId=123&token=ABC"
                }
            );

            Console.WriteLine(result);
        }
    }
}
