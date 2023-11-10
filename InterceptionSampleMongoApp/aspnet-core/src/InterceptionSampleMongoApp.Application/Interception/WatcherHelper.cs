using System.Linq;
using System.Reflection;

namespace InterceptionSampleMongoApp.Interception;

public static class WatcherHelper
{
    public static bool IsWatcherMethod(MethodInfo methodInfo, out WatcherAttribute watcherAttribute)
    {
        //Method declaration
        var attrs = methodInfo
            .GetCustomAttributes(true)
            .OfType<WatcherAttribute>()
            .ToArray();

        if (attrs.Any())
        {
            watcherAttribute = attrs.First();
            return !watcherAttribute.IsDisabled;
        }

        if (methodInfo.DeclaringType != null)
        {
            //Class declaration
            attrs = methodInfo.DeclaringType
                .GetTypeInfo()
                .GetCustomAttributes(true)
                .OfType<WatcherAttribute>()
                .ToArray();

            if (attrs.Any())
            {
                watcherAttribute = attrs.First();
                return !watcherAttribute.IsDisabled;
            }
        }

        watcherAttribute = null;
        return false;
    }

    public static bool IsWatcherType(TypeInfo implementationType)
    {
        return HasWatcherAttribute(implementationType) || AnyMethodHasWatcherAttribute(implementationType);
    }

    private static bool AnyMethodHasWatcherAttribute(TypeInfo implementationType)
    {
        return implementationType
            .GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic)
            .Any(HasWatcherAttribute);
    }

    private static bool HasWatcherAttribute(MemberInfo methodInfo)
    {
        return methodInfo.IsDefined(typeof(WatcherAttribute), true);
    }
}