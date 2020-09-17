using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using ExtendLocalizationResource.Localization;
using ExtendLocalizationResource.MultiTenancy;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;

namespace ExtendLocalizationResource.Web.Menus
{
    public class ExtendLocalizationResourceMenuContributor : IMenuContributor
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

            var l = context.GetLocalizer<ExtendLocalizationResourceResource>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem(ExtendLocalizationResourceMenus.Home, l["Menu:Home"], "~/"));
        }
    }
}
