using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using SignInWithoutSpecifyingTenant.Localization;
using SignInWithoutSpecifyingTenant.MultiTenancy;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;

namespace SignInWithoutSpecifyingTenant.Web.Menus
{
    public class SignInWithoutSpecifyingTenantMenuContributor : IMenuContributor
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

            var l = context.GetLocalizer<SignInWithoutSpecifyingTenantResource>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem(SignInWithoutSpecifyingTenantMenus.Home, l["Menu:Home"], "~/"));
        }
    }
}
