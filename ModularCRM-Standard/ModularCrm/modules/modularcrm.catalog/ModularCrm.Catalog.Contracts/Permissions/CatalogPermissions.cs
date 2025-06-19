using Volo.Abp.Reflection;

namespace ModularCrm.Catalog.Permissions;

public class CatalogPermissions
{
    public const string GroupName = "Catalog";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(CatalogPermissions));
    }
}
