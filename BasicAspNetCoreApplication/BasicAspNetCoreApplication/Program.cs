using BasicAspNetCoreApplication;

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseAutofac();

await builder.AddApplicationAsync<AppModule>();

var app = builder.Build();

await app.InitializeApplicationAsync();

await app.RunAsync();
