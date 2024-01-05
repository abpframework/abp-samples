using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;
using ProductManagement.Catalogs;
using ProductManagement.Products;
using ProtoBuf.Grpc.Client;

namespace ProductManagement.Blazor.Pages;

public partial class Index
{
    private List<ProductDto> Products { get; set; } = new();
    private List<CatalogDto> Catalogs { get; set; } = new();

    protected override async Task OnInitializedAsync()
    {
        var grpcChannelOptions = new GrpcChannelOptions
        {
            HttpHandler = new GrpcWebHandler(new HttpClientHandler())
        };
        
        if (CurrentTenant.IsAvailable)
        {
            var credentials = CallCredentials.FromInterceptor(async (context, metadata) =>
            {
                metadata.Add("__tenant", CurrentTenant.Name);
            });
            grpcChannelOptions.Credentials = ChannelCredentials.Create(new SslCredentials(), credentials);
        }


        var channel = GrpcChannel.ForAddress("https://localhost:10042", grpcChannelOptions);

        var productAppService = channel.CreateGrpcService<IProductAppService>();
        Products = await productAppService.GetListAsync();

        var catalogAppService = channel.CreateGrpcService<ICatalogAppService>();
        Catalogs = await catalogAppService.GetListAsync();
    }
}