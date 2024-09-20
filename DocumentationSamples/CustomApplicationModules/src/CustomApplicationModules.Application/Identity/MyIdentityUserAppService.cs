using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace CustomApplicationModules.Identity
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(IIdentityUserAppService), typeof(IdentityUserAppService))]
    public class MyIdentityUserAppService : IdentityUserAppService
    {
        public MyIdentityUserAppService(
            IdentityUserManager userManager,
            IIdentityUserRepository userRepository,
            IIdentityRoleRepository roleRepository,
            IOptions<IdentityOptions> identityOptions,
            IPermissionChecker permissionChecker) : base(userManager,
            userRepository, roleRepository, identityOptions, permissionChecker)
        {
        }

        public override async Task<IdentityUserDto> GetAsync(Guid id)
        {
            //SET AN EXTRA PROPERTY
            var user = await UserRepository.GetAsync(id);
            user.SetProperty("Title", "My custom title value!");
            user.SetProperty("SecretNumber", "SecretNumber value!");
            user.SetProperty("SocialSecurityNumber", "SocialSecurityNumber value!");
            await UserRepository.UpdateAsync(user);

            //GET AN EXTRA PROPERTY
            user = await UserRepository.GetAsync(id);
            var title = user.GetProperty("Title");
            var secretNumber = user.GetProperty("SecretNumber");
            var socialSecurityNumber = user.GetProperty("SocialSecurityNumber");

            return await base.GetAsync(id);
        }
    }
}
