using System.Security.Claims;
using Microsoft.Extensions.Logging;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Users;

namespace SeparateBackgroundJob.Common.Shared;

public class MyReportJob : AsyncBackgroundJob<MyReportJobArgs>, ITransientDependency
{
    private readonly ICurrentPrincipalAccessor _currentPrincipalAccessor;
    private readonly IdentityUserManager _identityUserManager;
    private readonly ICurrentUser _currentUser;

    public MyReportJob(
        ICurrentPrincipalAccessor currentPrincipalAccessor,
        IdentityUserManager identityUserManager,
        ICurrentUser currentUser)
    {
        _currentPrincipalAccessor = currentPrincipalAccessor;
        _identityUserManager = identityUserManager;
        _currentUser = currentUser;
    }

    public override async Task ExecuteAsync(MyReportJobArgs args)
    {
        Logger.LogInformation("Executing MyReportJob with args: {0}", args.Content);

        if (args.UserId != null)
        {
            using (_currentPrincipalAccessor.Change(await CreatePrincipalAsync(args.UserId.Value)))
            {
                // Your code here, the user context has been changed.
                Logger.LogInformation("Executing MyReportJob as tenant/user: {0}/{1}", 
                    _currentUser.TenantId == null ? "Host" : _currentUser.TenantId.ToString(), _currentUser.UserName);
            }
        }
    }
    
    private async Task<ClaimsPrincipal> CreatePrincipalAsync(Guid userId)
    {
        var user = await _identityUserManager.GetByIdAsync(userId);
        
        var identity = new ClaimsIdentity(new []
        {
            new Claim(AbpClaimTypes.UserId, user.Id.ToString()),
            new Claim(AbpClaimTypes.UserName, user.UserName),
            new Claim(AbpClaimTypes.Email, user.Email),
            // roles
        });
       
        if (user.TenantId.HasValue)
        {
            identity.AddClaim(new Claim(AbpClaimTypes.TenantId, user.TenantId.Value.ToString()));
        }

        return new ClaimsPrincipal(identity);
    } 
}