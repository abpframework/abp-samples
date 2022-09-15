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
public class MyLoginModel : OpenIddictSupportedLoginModel
{
    private readonly ITenantRepository _tenantRepository;

    public MyLoginModel(
        IAuthenticationSchemeProvider schemeProvider,
        IOptions<AbpAccountOptions> accountOptions,
        IOptions<IdentityOptions> identityOptions,
        AbpOpenIddictRequestHelper openIddictRequestHelper,
        ITenantRepository tenantRepository)
        : base(schemeProvider, accountOptions, identityOptions, openIddictRequestHelper)
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

![image](https://user-images.githubusercontent.com/6908465/113087977-45ed1300-9217-11eb-9068-32503522c13d.png)

![image](https://user-images.githubusercontent.com/6908465/113088025-5c936a00-9217-11eb-9064-c45167de7521.png)

![image](https://user-images.githubusercontent.com/6908465/113088040-63ba7800-9217-11eb-9ba3-3d0acbe0a2dd.png)

![image](https://user-images.githubusercontent.com/6908465/113088055-6b7a1c80-9217-11eb-8591-1f080d5e6b91.png)



