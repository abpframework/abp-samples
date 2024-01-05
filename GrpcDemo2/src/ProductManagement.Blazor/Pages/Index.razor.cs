using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Grpc.Net.Client.Configuration;
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
        var credentials = CallCredentials.FromInterceptor(async (context, metadata) =>
        {
            // var token = "get access token from somewhere
            // metadata.Add("Authorization", $"Bearer {token}");

            metadata.Add("__tenant", ProductManagementConstants.AcmeTenant);
        });

        var channel = GrpcChannel.ForAddress("https://localhost:10042", new GrpcChannelOptions
        {
            HttpHandler = new GrpcWebHandler(new HttpClientHandler()),
            Credentials = ChannelCredentials.Create(new SslCredentials(), credentials)
        });

        var productAppService = channel.CreateGrpcService<IProductAppService>();
        Products = await productAppService.GetListAsync();

        var catalogAppService = channel.CreateGrpcService<ICatalogAppService>();
        Catalogs = await catalogAppService.GetListAsync();
    }
}
