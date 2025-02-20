using Volo.Abp.Reflection;

namespace ModularCrm.Products.Permissions;

public class ProductsPermissions
{
    public const string GroupName = "Products";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(ProductsPermissions));
    }
}
