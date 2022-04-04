using System;
using System.Threading.Tasks;
using Volo.Abp.Account;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;

namespace KeycloakDemo.HttpApi.Client.ConsoleTestApp;

public class ClientDemoService : ITransientDependency
{
    private readonly IIdentityUserAppService _identityUserAppService;

    public ClientDemoService(IIdentityUserAppService identityUserAppService)
    {
        _identityUserAppService = identityUserAppService;
    }

    public async Task RunAsync()
    {
        var result = await _identityUserAppService.GetListAsync(new GetIdentityUsersInput());

        foreach (var user in result.Items)
        {
            Console.WriteLine($"UserName : {user.UserName}");
            Console.WriteLine($"Email    : {user.Email}");
            Console.WriteLine($"Name     : {user.Name}");
            Console.WriteLine($"Surname  : {user.Surname}");
            Console.WriteLine("-----------------------");
        }
    }
}
