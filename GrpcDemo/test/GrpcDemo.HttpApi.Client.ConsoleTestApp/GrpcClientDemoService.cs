using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using GrpcService1;
using Microsoft.Extensions.Configuration;
using Volo.Abp.DependencyInjection;

namespace GrpcDemo.HttpApi.Client.ConsoleTestApp
{
    public class GrpcClientDemoService : ITransientDependency
    {
        private readonly IConfiguration _configuration;

        public GrpcClientDemoService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task RunAsync()
        {
            var serverUrl = _configuration["RemoteServices:Default:BaseUrl"];

            using var channel = GrpcChannel.ForAddress(serverUrl);

            var client = new Greeter.GreeterClient(channel);

            var reply = await client.SayHelloAsync(new HelloRequest { Name = "GreeterClient" });

            Console.WriteLine("Greeting: " + reply.Message);
        }
    }
}
