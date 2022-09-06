using System.Threading.Tasks;
using EShopOnAbp.PublicWeb.Components.Toolbar.Cart;
using EShopOnAbp.PublicWeb.Components.Toolbar.LoginLink;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.Users;

namespace EShopOnAbp.PublicWeb.Menus
{
    public class EShopOnAbpPublicWebToolbarContributor : IToolbarContributor
    {
        public virtual Task ConfigureToolbarAsync(IToolbarConfigurationContext context)
        {
            if (context.Toolbar.Name != StandardToolbars.Main)
            {
                return Task.CompletedTask;
            }

            context.Toolbar.Items.Insert(0, new ToolbarItem(typeof(CartWidgetViewComponent), order: 0));

            if (!context.ServiceProvider.GetRequiredService<ICurrentUser>().IsAuthenticated)
            {
                context.Toolbar.Items.Add(new ToolbarItem(typeof(LoginLinkViewComponent)));
            }

            return Task.CompletedTask;
        }
    }
}
