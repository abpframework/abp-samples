using System;
using System.Threading.Tasks;
using Grpc.Net.Client;
using ProductManagement.Products;
using ProtoBuf.Grpc.Client;
using Volo.Abp.DependencyInjection;

namespace ProductManagement.HttpApi.Client.ConsoleTestApp;

public class ClientDemoService : ITransientDependency
{
    public async Task RunAsync()
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
