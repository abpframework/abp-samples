using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace CustomApplicationModules.Web.Pages.Shared.Components.Notification
{
    public class NotificationViewComponent : AbpViewComponent
    {
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return await Task.FromResult(View("/Pages/Shared/Components/Notification/Default.cshtml"));
        }
    }
}
