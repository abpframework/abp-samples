using Volo.Abp.Reflection;

namespace EShopOnAbp.CatalogService.Permissions
{
    public static class CatalogServicePermissions
    {
        public const string GroupName = "CatalogService";

        public static class Products
        {
            public const string Default = GroupName + ".Products";
            public const string Delete = Default + ".Delete";
            public const string Update = Default + ".Update";
            public const string Create = Default + ".Create";
        }
        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CatalogServicePermissions));
        }
    }
}