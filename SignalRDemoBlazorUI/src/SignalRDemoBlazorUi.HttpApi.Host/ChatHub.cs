using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.AspNetCore.SignalR;
using Volo.Abp.Identity;

namespace SignalRDemoBlazorUi;

[Authorize]
public class ChatHub : AbpHub
{
    private readonly IIdentityUserRepository _identityUserRepository;
    private readonly ILookupNormalizer _lookupNormalizer;

    public ChatHub(IIdentityUserRepository identityUserRepository, ILookupNormalizer lookupNormalizer)
    {
        _identityUserRepository = identityUserRepository;
        _lookupNormalizer = lookupNormalizer;
    }

    public async Task SendMessage(string targetUserName, string message)
    {
        var targetUser = await _identityUserRepository.FindByNormalizedUserNameAsync(_lookupNormalizer.NormalizeName(targetUserName));

        await Clients
            .User(targetUser.Id.ToString())
            .SendAsync("ReceiveMessage", CurrentUser.UserName, message);
    }
}

