using BookStore.Blazor.WebApp;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseAutofac();
await builder.AddApplicationAsync<BookStoreBlazorWebAppModule>();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();
