using BookStore.Blazor.Server;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseAutofac();
await builder.AddApplicationAsync<BookStoreBlazorServerModule>();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();
