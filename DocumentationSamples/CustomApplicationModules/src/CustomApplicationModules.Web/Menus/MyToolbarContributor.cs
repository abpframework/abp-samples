using System.Threading.Tasks;
using CustomApplicationModules.Web.Pages.Shared.Components.Notification;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;

namespace CustomApplicationModules.Web.Menus
{
    public class MyToolbarContributor : IToolbarContributor
    {
        public Task ConfigureToolbarAsync(IToolbarConfigurationContext context)
        {
            if (context.Toolbar.Name == StandardToolbars.Main)
            {
                context.Toolbar.Items
                    .Insert(0, new ToolbarItem(typeof(NotificationViewComponent)));
            }

            return Task.CompletedTask;
        }
    }
}
