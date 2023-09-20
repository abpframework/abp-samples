using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.BackgroundJobs;

namespace SeparateBackgroundJob.Web.Pages;

public class IndexModel : SeparateBackgroundJobPageModel
{
    private readonly IBackgroundJobManager _backgroundJobManager;

    [BindProperty(SupportsGet = true)]
    public string? ReportContent { get; set; }

    public IndexModel(IBackgroundJobManager backgroundJobManager)
    {
        _backgroundJobManager = backgroundJobManager;
    }

    public void OnGet()
    {

    }
    
    public async Task OnPostAsync()
    {
        await _backgroundJobManager.EnqueueAsync(new MyReportJobArgs
        {
            Content = ReportContent
        });
        
        Alerts.Success("Job is queued!");
    }
}
