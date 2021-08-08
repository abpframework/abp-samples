using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace OpenIddictDemo.HttpApi.Client.ConsoleTestApp
{
    public class ClientDemoService : ITransientDependency
    {
        private readonly IIdentityUserLookupAppService _userLookupAppService;
        private readonly IDemoAppService _demoAppService;

        public ClientDemoService(
            IIdentityUserLookupAppService userLookupAppService,
            IDemoAppService demoAppService)
        {
            _userLookupAppService = userLookupAppService;
            _demoAppService = demoAppService;
        }

        public async Task RunAsync()
        {
            var demoOutput = await _demoAppService.GetAsync();
            Console.WriteLine($"ClientId : {demoOutput.ClientId}");

            var output = await _userLookupAppService.FindByUserNameAsync("admin");
            Console.WriteLine($"UserName : {output.UserName}");
            Console.WriteLine($"Email    : {output.Email}");
            Console.WriteLine($"Name     : {output.Name}");
            Console.WriteLine($"Surname  : {output.Surname}");
        }
    }
}