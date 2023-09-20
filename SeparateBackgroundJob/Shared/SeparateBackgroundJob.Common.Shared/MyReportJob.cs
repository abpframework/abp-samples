using Microsoft.Extensions.Logging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;

namespace SeparateBackgroundJob.Common.Shared;

public class MyReportJob : AsyncBackgroundJob<MyReportJobArgs>, ITransientDependency
{
    public override Task ExecuteAsync(MyReportJobArgs args)
    {
        Logger.LogInformation("Executing MyReportJob with args: {0}", args.Content);
        return Task.CompletedTask;
    }
}