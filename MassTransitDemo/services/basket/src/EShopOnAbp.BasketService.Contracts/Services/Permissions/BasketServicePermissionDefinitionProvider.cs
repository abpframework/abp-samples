using EShopOnAbp.BasketService.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EShopOnAbp.BasketService.Services.Permissions
{
    public class BasketServicePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(BasketServicePermissions.GroupName);
            //Define your own permissions here. Example:
            //myGroup.AddPermission(BasketServicePermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<BasketServiceResource>(name);
        }
    }
}
