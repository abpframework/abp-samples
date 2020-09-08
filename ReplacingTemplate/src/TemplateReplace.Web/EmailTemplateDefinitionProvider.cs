using Volo.Abp.DependencyInjection;
using Volo.Abp.Emailing.Templates;
using Volo.Abp.TextTemplating;

namespace TemplateReplace.Web
{
    public class EmailTemplateDefinitionProvider : TemplateDefinitionProvider, ITransientDependency
    {
        public override void Define(ITemplateDefinitionContext context)
        {
            var emailLayoutTemplate = context.GetOrNull(StandardEmailTemplates.Message);

            emailLayoutTemplate
                .WithVirtualFilePath(
                    "/Templates/EmailLayout.cshtml",
                    isInlineLocalized: true
                );
        }
    }
}