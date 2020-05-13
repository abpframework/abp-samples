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
        }
    }
}
