using TextTemplateDemo.Localization;
using Volo.Abp.TextTemplating;

namespace TextTemplateDemo
{
    public class DemoTemplateDefinitionProvider : TemplateDefinitionProvider
    {
        public override void Define(ITemplateDefinitionContext context)
        {
            context.Add(
                new TemplateDefinition("Hello") //template name: "Hello"
                    .WithVirtualFilePath(
                        "/Demos/Hello/Hello.tpl", //template content path
                        isInlineLocalized: true
                    )
            );

            context.Add(
                new TemplateDefinition(
                        name: "PasswordReset",
                        localizationResource: typeof(DemoResource)
                    )
                    .WithVirtualFilePath(
                        "/Demos/PasswordReset/PasswordReset.tpl", //template content path
                        isInlineLocalized: true
                    )
            );

            context.Add(
                new TemplateDefinition(
                        name: "WelcomeEmail",
                        defaultCultureName: "en"
                    )
                    .WithVirtualFilePath(
                        "/Demos/WelcomeEmail/Templates", //template content folder
                        isInlineLocalized: false
                    )
            );
        }
    }
}
