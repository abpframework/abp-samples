using System.Net;
using Elsa.Activities.Http;
using Elsa.Builders;

namespace ElsaDemo.Web.Workflows
{
    public class HelloWorldHttp : IWorkflow
    {
        public void Build(IWorkflowBuilder builder)
        {
            builder
                .HttpEndpoint("/hello-world")
                .WriteHttpResponse(HttpStatusCode.OK, "<h1>Hello World!</h1>", "text/html");
        }
    }
}