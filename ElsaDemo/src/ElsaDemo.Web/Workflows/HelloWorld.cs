using Elsa.Activities.Console;
using Elsa.Builders;

namespace ElsaDemo.Web.Workflows
{
    public class HelloWorld : IWorkflow
    {
        public void Build(IWorkflowBuilder builder) => builder.WriteLine("Hello World from Elsa!");
    }
}