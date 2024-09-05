using Volo.Abp.Reflection;

namespace Acme.ModuleA.Permissions;

public class ModuleAPermissions
{
    public const string GroupName = "ModuleA";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(ModuleAPermissions));
    }
}
