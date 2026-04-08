using BookStore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseAutofac();
await builder.AddApplicationAsync<BookStoreMvcModule>();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();
