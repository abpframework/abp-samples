using Volo.Abp.Reflection;

namespace EShopOnAbp.OrderingService.Permissions
{
    public static class OrderingServicePermissions
    {
        public const string GroupName = "OrderingService";

        public static class Orders
        {
            public const string Default = GroupName + ".Orders";
            public const string SetAsCancelled = GroupName + ".SetAsCancelled";
            public const string SetAsShipped = GroupName + ".SetAsShipped";
            public const string Dashboard = GroupName + ".Dashboard";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(OrderingServicePermissions));
        }
    }
}