using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace UnifiedContextsDemo.Users
{
    public class MyUserService : ITransientDependency
    {
        private readonly IMyUserRepository _userRepository;

        public MyUserService(IMyUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task SetSocialSecurityNumberDemoAsync(string userName, string number)
        {
            var user = await _userRepository.GetAsync(u => u.UserName == userName);
            user.SetSocialSecurityNumber(number);
            await _userRepository.UpdateAsync(user);
        }

        public async Task<string> GetSocialSecurityNumberDemoAsync(string userName)
        {
            var user = await _userRepository.GetAsync(u => u.UserName == userName);
            return user.GetSocialSecurityNumber();
        }

        public async Task<IdentityUser> FindBySocialSecurityNumberDemoAsync(string number)
        {
            return await _userRepository.FindBySocialSecurityNumber(number);
        }
    }
}