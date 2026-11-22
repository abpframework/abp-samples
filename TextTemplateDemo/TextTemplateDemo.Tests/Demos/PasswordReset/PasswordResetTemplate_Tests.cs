using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Shouldly;
using Volo.Abp;
using Volo.Abp.Autofac;
using Volo.Abp.TextTemplating;
using Xunit;

namespace TextTemplateDemo.Demos.PasswordReset
{
    public class PasswordResetTemplate_Tests
    {
        private readonly IAbpApplicationWithInternalServiceProvider _application;
        private readonly ITemplateRenderer _templateRenderer;

        public PasswordResetTemplate_Tests()
        {
            _application = AbpApplicationFactory.Create<TextTemplateDemoModule>(options =>
            {
                options.UseAutofac();
            });
            _application.Initialize();

            _templateRenderer = _application.ServiceProvider
                .GetRequiredService<ITemplateRenderer>();
        }

        [Fact]
        public async Task Should_Render_Localized_Title_Instead_Of_The_Bare_Key()
        {
            var result = await _templateRenderer.RenderAsync(
                "PasswordReset",
                new PasswordResetModel
                {
                    Link = "https://abp.io/example-link?userId=123&token=ABC"
                }
            );

            result.ShouldContain("title=\"Reset my password\"");
            result.ShouldNotContain("ResetMyPasswordTitle");
        }
    }
}
