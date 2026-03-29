using UrlBasedLocalizationSample;

var builder = WebApplication.CreateBuilder(args);
builder.Host.UseAutofac();
await builder.AddApplicationAsync<UrlBasedLocalizationSampleModule>();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();
