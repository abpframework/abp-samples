using Microsoft.Extensions.Logging;
using System.Security.Claims;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace SeparateBackgroundJob.Common.Shared;

public class MyReportJob : AsyncBackgroundJob<MyReportJobArgs>, ITransientDependency
{
    private readonly ICurrentPrincipalAccessor _currentPrincipalAccessor;

    public MyReportJob(ICurrentTenant currentTenant, ICurrentPrincipalAccessor currentPrincipalAccessor)
    {
        CurrentTenant = currentTenant;
        _currentPrincipalAccessor = currentPrincipalAccessor;
    }

    private ICurrentTenant CurrentTenant { get; }

    [UnitOfWork]
    public override Task ExecuteAsync(MyReportJobArgs args)
    {
        Logger.LogInformation("Executing MyReportJob with args: {0}", args.Content);

        using (var scope = _currentPrincipalAccessor.Change(CreatePrincipal(args.UserId, args.TenantId)))
        {
            // Your code here, the user context has been changed.
            Logger.LogInformation("Executing MyReportJob as tenant/user: {0}/{1}", args.TenantId, args.UserId);
        }

        return Task.CompletedTask;
    }

    private ClaimsPrincipal CreatePrincipal(Guid userId, Guid? tenantId)
    {
        var identity = new ClaimsIdentity();
        identity.AddClaim(new Claim(AbpClaimTypes.UserId, userId.ToString()));

        if (tenantId.HasValue)
        {
            identity.AddClaim(new Claim(AbpClaimTypes.TenantId, tenantId.Value.ToString()));
        }

        return new ClaimsPrincipal(identity);
    }
}