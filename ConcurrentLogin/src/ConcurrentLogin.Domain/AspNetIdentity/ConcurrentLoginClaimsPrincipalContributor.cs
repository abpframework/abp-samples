using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;

namespace ConcurrentLogin.AspNetIdentity;

public class ConcurrentLoginClaimsPrincipalContributor : IAbpClaimsPrincipalContributor, ITransientDependency
{
    protected IdentityUserManager UserManager { get; }

    public ConcurrentLoginClaimsPrincipalContributor(IdentityUserManager userManager)
    {
        UserManager = userManager;
    }

    public async Task ContributeAsync(AbpClaimsPrincipalContributorContext context)
    {
        var identity = context.ClaimsPrincipal.Identities.FirstOrDefault();
        var userId = identity?.FindUserId();
        if (userId.HasValue)
        {
            var user = await UserManager.FindByIdAsync(userId.ToString());
            var token = user.GetProperty(ConcurrentLoginConsts.ConcurrentLoginToken).ToString();
            identity.AddClaim(new Claim(ConcurrentLoginConsts.ConcurrentLoginToken, token));
        }
    }
}
