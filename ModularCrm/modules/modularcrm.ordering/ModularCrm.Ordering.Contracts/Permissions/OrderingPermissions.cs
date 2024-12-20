using Volo.Abp.Reflection;

namespace ModularCrm.Ordering.Permissions;

public class OrderingPermissions
{
    public const string GroupName = "Ordering";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(OrderingPermissions));
    }
}
