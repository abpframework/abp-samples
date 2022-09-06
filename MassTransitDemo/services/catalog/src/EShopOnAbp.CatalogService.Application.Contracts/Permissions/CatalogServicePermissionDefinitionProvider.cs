using EShopOnAbp.CatalogService.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace EShopOnAbp.CatalogService.Permissions
{
    public class CatalogServicePermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var productManagementGroup = context.AddGroup(CatalogServicePermissions.GroupName, L("Permission:GroupName"));
            var products = productManagementGroup.AddPermission(CatalogServicePermissions.Products.Default, L("Permission:Products"));
            products.AddChild(CatalogServicePermissions.Products.Update, L("Permission:Products.Edit"));
            products.AddChild(CatalogServicePermissions.Products.Delete, L("Permission:Products.Delete"));
            products.AddChild(CatalogServicePermissions.Products.Create, L("Permission:Products.Create"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<CatalogServiceResource>(name);
        }
    }
}
