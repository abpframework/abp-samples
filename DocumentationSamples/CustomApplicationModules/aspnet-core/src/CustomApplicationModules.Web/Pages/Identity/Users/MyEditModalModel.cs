using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Web.Pages.Identity.Roles;

namespace CustomApplicationModules.Web.Pages.Identity.Users
{
    [Dependency(ReplaceServices = true)]
    [ExposeServices(typeof(EditModalModel))]
    public class MyEditModalModel : EditModalModel
    {

        public MyEditModalModel(
            IIdentityRoleAppService
            identityRoleAppService) :
            base(identityRoleAppService)
        {
        }

        public override async Task<IActionResult> OnPostAsync()
        {
            //TODO: Additional logic
            var result = await base.OnPostAsync();
            //TODO: Additional logic

            return result;
        }
    }
}
