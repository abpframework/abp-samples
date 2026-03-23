using System.Threading.Tasks;
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

        using var application = await AbpApplicationFactory.CreateAsync<DaprModule>(options =>
        {
            options.UseAutofac();
            options.Services.AddLogging(c => c.AddSerilog());
        });

        await application.InitializeAsync();
        await application.ShutdownAsync();
    }
}
