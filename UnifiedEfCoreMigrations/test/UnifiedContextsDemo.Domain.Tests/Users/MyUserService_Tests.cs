using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace UnifiedContextsDemo.Users
{
    public class MyUserService_Tests : UnifiedContextsDemoDomainTestBase
    {
        private readonly MyUserService _userService;
        
        public MyUserService_Tests()
        {
            _userService = GetRequiredService<MyUserService>();
        }

        [Fact]
        public async Task Set_And_Get_Custom_Property()
        {
            await WithUnitOfWorkAsync(async () =>
            {
                var number = await _userService.GetSocialSecurityNumberDemoAsync("admin");
                number.ShouldBe("");
            });

            await WithUnitOfWorkAsync(async () =>
            {
                await _userService.SetSocialSecurityNumberDemoAsync("admin", "12345");
            });

            await WithUnitOfWorkAsync(async () =>
            {
                var number = await _userService.GetSocialSecurityNumberDemoAsync("admin");
                number.ShouldBe("12345");
            });
            
            await WithUnitOfWorkAsync(async () =>
            {
                var user = await _userService.FindBySocialSecurityNumberDemoAsync("12345");
                user.ShouldNotBeNull();
                user.UserName.ShouldBe("admin");
            });
        } 
    }
}