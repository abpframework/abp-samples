using ModularCrm.Products.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace ModularCrm.Products.Permissions;

public class ProductsPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ProductsPermissions.GroupName, L("Permission:Products"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ProductsResource>(name);
    }
}
