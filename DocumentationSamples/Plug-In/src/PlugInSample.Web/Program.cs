using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;
using Volo.Abp;
using Volo.Abp.Modularity.PlugIns;

namespace PlugInSample.Web;

public class Program
{
    public async static Task<int> Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
#if DEBUG
            .MinimumLevel.Debug()
#else
            .MinimumLevel.Information()
#endif
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .WriteTo.Async(c => c.File("Logs/logs.txt"))
            .WriteTo.Async(c => c.Console())
            .CreateLogger();

        try
        {
            Log.Information("Starting web host.");
            var builder = WebApplication.CreateBuilder(args);
            builder.Host.AddAppSettingsSecretsJson()
                .UseAutofac()
                .UseSerilog();
            await builder.AddApplicationAsync<PlugInSampleWebModule>(options =>
            {
                var currentDirectory = options.Services.GetHostingEnvironment().ContentRootPath;
                var plugDllInPath = "";
                for (var i = 0; i < 10; i++)
                {
                    var parentDirectory = new DirectoryInfo(currentDirectory).Parent;
                    if (parentDirectory == null)
                    {
                        break;
                    }
                    if (parentDirectory.Name == "src")
                    {
#if DEBUG
                        plugDllInPath = Path.Combine(parentDirectory.FullName, "MyPlugIn", "bin", "Debug", "net8.0");
#else
                        plugDllInPath = Path.Combine(parentDirectory.FullName, "MyPlugIn", "bin", "Release", "net8.0");
#endif
                        break;
                    }
                    currentDirectory = parentDirectory.FullName;
                }

                if (plugDllInPath.IsNullOrWhiteSpace())
                {
                    throw new AbpException("Could not find the plug DLL path!");
                }

                options.PlugInSources.AddFolder(plugDllInPath);
            });
            var app = builder.Build();
            await app.InitializeApplicationAsync();
            await app.RunAsync();
            return 0;
        }
        catch (Exception ex)
        {
            Log.Fatal(ex, "Host terminated unexpectedly!");
            return 1;
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
}
