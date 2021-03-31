# Sign In Without Specifying Tenant


```cs
public override void ConfigureServices(ServiceConfigurationContext context)
{
    //...
    context.Services.Configure<AbpTenantResolveOptions>(options =>
    {
        options.TenantResolvers.Clear();
        options.TenantResolvers.Add(new CurrentUserTenantResolveContributor());
    });
    //...
}
```

```cs
[ExposeServices(typeof(LoginModel))]
public class MyLoginModel : IdentityServerSupportedLoginModel
{
    private readonly ITenantRepository _tenantRepository;

    public MyLoginModel(
        IAuthenticationSchemeProvider schemeProvider,
        IOptions<AbpAccountOptions> accountOptions,
        IIdentityServerInteractionService interaction,
        IClientStore clientStore,
        IEventService identityServerEvents,
        IOptions<IdentityOptions> identityOptions,
        ITenantRepository tenantRepository)
        : base(schemeProvider, accountOptions, interaction, clientStore, identityServerEvents, identityOptions)
    {
        _tenantRepository = tenantRepository;
    }

    public override async Task<IActionResult> OnPostAsync(string action)
    {
        var user = await FindUserAsync(LoginInput.UserNameOrEmailAddress);
        using (CurrentTenant.Change(user?.TenantId))
        {
            return await base.OnPostAsync(action);
        }
    }

    public override async Task<IActionResult> OnGetExternalLoginCallbackAsync(string returnUrl = "", string returnUrlHash = "", string remoteError = null)
    {
        var user = await FindUserAsync(LoginInput.UserNameOrEmailAddress);
        using (CurrentTenant.Change(user?.TenantId))
        {
            return await base.OnGetExternalLoginCallbackAsync(returnUrl, returnUrlHash, remoteError);
        }
    }

    protected virtual async Task<IdentityUser> FindUserAsync(string uniqueUserNameOrEmailAddress)
    {
        IdentityUser user = null;
        using (CurrentTenant.Change(null))
        {
            user = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress) ??
                   await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);

            if (user != null)
            {
                return user;
            }
        }

        foreach (var tenant in await _tenantRepository.GetListAsync())
        {
            using (CurrentTenant.Change(tenant.Id))
            {
                user = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress) ??
                       await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);

                if (user != null)
                {
                    return user;
                }
            }
        }

        return null;
    }
}

```
