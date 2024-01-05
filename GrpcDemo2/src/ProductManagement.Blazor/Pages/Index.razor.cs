using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Grpc.Net.Client.Web;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using ProductManagement.Catalogs;
using ProductManagement.Products;
using ProtoBuf.Grpc.Client;

namespace ProductManagement.Blazor.Pages;

public partial class Index
{
    private List<ProductDto> Products { get; set; } = new();
    private List<CatalogDto> Catalogs { get; set; } = new();
    [Inject] IAccessTokenProvider TokenProvider { get; set; }

    protected override async Task OnInitializedAsync()
    {
        var accessTokenResult = await TokenProvider.RequestAccessToken();
        var accessToken = string.Empty;

        if (accessTokenResult.TryGetToken(out var token))
        {
            accessToken = token.Value;
        }
        
        var credentials = CallCredentials.FromInterceptor(async (context, metadata) =>
        {
            metadata.Add("Authorization", $"Bearer {accessToken}");
        });

        if (CurrentTenant.IsAvailable)
        {
            credentials = CallCredentials.FromInterceptor(async (context, metadata) =>
            {
                metadata.Add("__tenant", CurrentTenant.Name);
                metadata.Add("Authorization", $"Bearer {accessToken}");
            });
        }

        var channel = GrpcChannel.ForAddress("https://localhost:10042", new GrpcChannelOptions
        {
            HttpHandler = new GrpcWebHandler(new HttpClientHandler()),
            Credentials = ChannelCredentials.Create(new SslCredentials(), credentials)
        });

        var productAppService = channel.CreateGrpcService<IProductAppService>();
        Products = await productAppService.GetListAsync();

        var catalogAppService = channel.CreateGrpcService<ICatalogAppService>();
        try
        {
            Catalogs = await catalogAppService.GetListAsync();
        }
        catch (Exception e)
        {
            //Omit
        }
    }
}