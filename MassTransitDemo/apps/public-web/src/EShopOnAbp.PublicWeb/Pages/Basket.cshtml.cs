using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace EShopOnAbp.PublicWeb.Pages;

public class BasketModel : AbpPageModel
{
    public BasketModel()
    {
    }

    public void OnGet()
    {
    }

    public IActionResult OnPostAsync()
    {
        if (!CurrentUser.IsAuthenticated)
        {
            Logger.LogInformation("Redirecting to Login..");
            return Challenge();
        }

        return RedirectToPage("Payment");
    }
}