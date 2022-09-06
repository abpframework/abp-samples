using Microsoft.Extensions.Configuration;

namespace Microsoft.Extensions.Hosting;

public static class AbpHostingHostBuilderExtensions
{
    public const string AppYarpJsonPath = "yarp.json";

    public static IHostBuilder AddYarpJson(
        this IHostBuilder hostBuilder,
        bool optional = true,
        bool reloadOnChange = true,
        string path = AppYarpJsonPath)
    {
        return hostBuilder.ConfigureAppConfiguration((_, builder) =>
        {
            builder.AddJsonFile(
                    path: AppYarpJsonPath,
                    optional: optional,
                    reloadOnChange: reloadOnChange
                )
                .AddEnvironmentVariables();
        });
    }
}