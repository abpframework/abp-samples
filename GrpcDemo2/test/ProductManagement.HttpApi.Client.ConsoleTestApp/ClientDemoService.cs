using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using ProductManagement.Products;
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
        
        await RunGrpcDemoAsync();
    }

    private static async Task RunGrpcDemoAsync()
    {
        using (var channel = GrpcChannel.ForAddress("https://localhost:10042"))
        {
            var productAppService = channel.CreateGrpcService<IProductAppService>();
            var productDtos = await productAppService.GetListAsync();

            foreach (var productDto in productDtos)
            {
                Console.WriteLine($"[Product] Id = {productDto.Id}, Name = {productDto.Name}");
            }
        }
    }
}
