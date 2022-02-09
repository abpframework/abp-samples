using Volo.Abp.Reflection;

namespace BookStore.Permissions;

public class BookStorePermissions
{
    public const string GroupName = "BookStore";

    public static string[] GetAll()
    {
        return ReflectionHelper.GetPublicConstantsRecursively(typeof(BookStorePermissions));
    }
}
