using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using SignalRDemo.Localization;
using SignalRDemo.MultiTenancy;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;

namespace SignalRDemo.Web.Menus
{
    public class SignalRDemoMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            if (!MultiTenancyConsts.IsEnabled)
            {
                var administration = context.Menu.GetAdministration();
                administration.TryRemoveMenuItem(TenantManagementMenuNames.GroupName);
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<SignalRDemoResource>>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem("SignalRDemo.Home", l["Menu:Home"], "/"));

            context.Menu.Items.Add(new ApplicationMenuItem("SignalRDemo.Chat", "Chat", "/Chat"));
        }
    }
}
