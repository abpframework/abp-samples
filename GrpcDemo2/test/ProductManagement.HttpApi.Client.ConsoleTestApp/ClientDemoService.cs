using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using ProtoBuf.Grpc.Client;
using Volo.Abp.Account;
using Volo.Abp.DependencyInjection;

namespace ProductManagement.HttpApi.Client.ConsoleTestApp;

public class ClientDemoService : ITransientDependency
{
    private readonly IProfileAppService _profileAppService;

    public ClientDemoService(IProfileAppService profileAppService)
    {
        _profileAppService = profileAppService;
    }

    public async Task RunAsync()
    {
        var output = await _profileAppService.GetAsync();
        Console.WriteLine($"UserName : {output.UserName}");
        Console.WriteLine($"Email    : {output.Email}");
        Console.WriteLine($"Name     : {output.Name}");
        Console.WriteLine($"Surname  : {output.Surname}");
        
        GrpcClientFactory.AllowUnencryptedHttp2 = true;
        using (var channel = GrpcChannel.ForAddress("http://localhost:10042"))
        {
            var calculator = channel.CreateGrpcService<IMyProductService>();
            var result = await calculator.GetListAsync();
            
            foreach (var dto in result)
            {
                Console.WriteLine($"[Product] Id = {dto.Id}, Name = {dto.Name}");
            }
        }
    }
}
