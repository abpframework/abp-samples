using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;

namespace MyPlugIn;

public class MyService : ITransientDependency
{
    private readonly ILogger<MyService> _logger;

    public MyService(ILogger<MyService> logger)
    {
        _logger = logger;
    }

    public void Initialize()
    {
        _logger.LogInformation("MyService has been initialized");
    }
}
