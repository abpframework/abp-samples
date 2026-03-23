using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;
using Volo.Abp;

namespace DynamicDistributedEvents;

public class Program
{
    public static async Task Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
            .WriteTo.Console()
            .CreateLogger();

        using var application = await AbpApplicationFactory.CreateAsync<AzureModule>(options =>
        {
            options.UseAutofac();
            options.Services.AddLogging(c => c.AddSerilog());

            var configuration = new ConfigurationBuilder()
                .SetBasePath(System.AppContext.BaseDirectory)
                .AddJsonFile("appsettings.json", optional: false)
                .Build();
            options.Services.ReplaceConfiguration(configuration);
        });

        await application.InitializeAsync();
        await application.ShutdownAsync();
    }
}
