# Bookstore AzureAD Integration Sample

## Introduction

This is demonstration sample of [how to  integrate AzureAD to an ABP application](azuread_blogpost_link) that enables users to sign in using OAuth 2.0 with credentials from Azure Active Directory. 



## Content

In this sample you can find:

* How to configure Azure Active Directory with using **OpenIdConnect**.

* How to configure Azure Active Directory with using  [**AddAzureAD**](https://www.nuget.org/packages/Microsoft.AspNetCore.Authentication.AzureAD.UI/).

* [How to customize **SignInManager**](custom_signinmanager_blogpost_link).

* [How to customize Account **LoginPage**](custom_loginpage_blogpost_link).



## Setup

Setup Azure App Registration and configure in appsettings with your credentials

```
  "AzureAd": {
    "Instance": "https://login.microsoftonline.com/",
    "TenantId": "<your-tenant-id",
    "ClientId": "<your-client-id>",
    "Domain": "domain.onmicrosoft.com",
    "CallbackPath": "/signin-azuread-oidc"	
  }
```


## History

**2020-03-28** Sample project created.