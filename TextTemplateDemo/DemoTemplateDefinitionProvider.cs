using Volo.Abp.TextTemplating;

namespace TextTemplateDemo
{
    public class DemoTemplateDefinitionProvider : TemplateDefinitionProvider
    {
        public override void Define(ITemplateDefinitionContext context)
        {
            context.Add(
                new TemplateDefinition("Hello")
                    .WithVirtualFilePath("/Demos/Hello/Hello.tpl", isInlineLocalized: true)
            );
        }
    }
}
