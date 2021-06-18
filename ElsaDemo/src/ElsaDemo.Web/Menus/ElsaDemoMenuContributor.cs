using System.Threading.Tasks;
using ElsaDemo.Localization;
using ElsaDemo.MultiTenancy;
using ElsaDemo.Permissions;
using Volo.Abp.Identity.Web.Navigation;
using Volo.Abp.SettingManagement.Web.Navigation;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;

namespace ElsaDemo.Web.Menus
{
    public class ElsaDemoMenuContributor : IMenuContributor
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
            var administration = context.Menu.GetAdministration();
            var l = context.GetLocalizer<ElsaDemoResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    ElsaDemoMenus.Home,
                    l["Menu:Home"],
                    "~/",
                    icon: "fas fa-home",
                    order: 0
                )
            );
            
            context.Menu.Items.Insert(
                1,
                new ApplicationMenuItem(
                    ElsaDemoMenus.Home,
                    "Workflow",
                    "~/elsa",
                    icon: "fas fa-code-branch",
                    order: 1,
                    requiredPermissionName: ElsaDemoPermissions.ElsaDashboard
                )
            );
            
            if (MultiTenancyConsts.IsEnabled)
            {
                administration.SetSubItemOrder(TenantManagementMenuNames.GroupName, 1);
            }
            else
            {
                administration.TryRemoveMenuItem(TenantManagementMenuNames.GroupName);
            }

            administration.SetSubItemOrder(IdentityMenuNames.GroupName, 2);
            administration.SetSubItemOrder(SettingManagementMenuNames.GroupName, 3);
        }
    }
}
