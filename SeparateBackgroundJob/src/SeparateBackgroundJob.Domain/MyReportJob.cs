using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;

namespace SeparateBackgroundJob;

public class MyReportJob : AsyncBackgroundJob<MyReportJobArgs>, ITransientDependency
{
    public override Task ExecuteAsync(MyReportJobArgs args)
    {
        Logger.LogInformation("Executing MyReportJob with args: {0}", args.Content);
        return Task.CompletedTask;
    }
}