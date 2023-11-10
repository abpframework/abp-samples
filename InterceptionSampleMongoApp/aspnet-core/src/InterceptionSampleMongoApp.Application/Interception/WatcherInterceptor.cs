using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;
using Volo.Abp.DynamicProxy;

namespace InterceptionSampleMongoApp.Interception;

public class WatcherInterceptor : AbpInterceptor, ITransientDependency
{
    private readonly ILogger<WatcherInterceptor> _logger;

    public WatcherInterceptor(ILogger<WatcherInterceptor> logger)
    {
        _logger = logger;
    }

    public override async Task InterceptAsync(IAbpMethodInvocation invocation)
    {
        if (!WatcherHelper.IsWatcherMethod(invocation.Method, out var watcherAttribute))
        {
            await invocation.ProceedAsync();
            return;
        }

        var startTime = Stopwatch.GetTimestamp();
        await invocation.ProceedAsync();
        var diff = Stopwatch.GetElapsedTime(startTime);

        if (diff > watcherAttribute.Timeout)
        {
            _logger.LogWarning(
                "{Method} method execution time took longer than expected. Expected time: {Expected}, Elapsed time:: {Real}",
                invocation.Method.DeclaringType?.FullName + "." + invocation.Method.Name,
                watcherAttribute.Timeout,
                diff);
        }
    }
}





