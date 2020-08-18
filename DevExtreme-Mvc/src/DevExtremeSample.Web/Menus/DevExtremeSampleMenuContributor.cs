using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using DevExtremeSample.Localization;
using DevExtremeSample.MultiTenancy;
using Volo.Abp.TenantManagement.Web.Navigation;
using Volo.Abp.UI.Navigation;

namespace DevExtremeSample.Web.Menus
{
    public class DevExtremeSampleMenuContributor : IMenuContributor
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

            var l = context.GetLocalizer<DevExtremeSampleResource>();

            context.Menu.Items.Insert(0, new ApplicationMenuItem("DevExtremeSample.Home", l["Menu:Home"], "~/"));
            
            var devExtremeExamples = new ApplicationMenuItem("Sample.Examples", l["Menu:Examples"], "#");
            devExtremeExamples.AddItem(new ApplicationMenuItem("Examples.TreeList", l["Menu:Examples:TreeList"], "~/TreeList"));
            devExtremeExamples.AddItem(new ApplicationMenuItem("Examples.DataGrid", l["Menu:Examples:DataGrid"], "~/DataGrid"));
            
            
            context.Menu.Items.Insert(1, devExtremeExamples);
        }
    }
}
