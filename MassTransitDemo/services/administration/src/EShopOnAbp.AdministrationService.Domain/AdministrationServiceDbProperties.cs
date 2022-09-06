namespace EShopOnAbp.AdministrationService
{
    public static class AdministrationServiceDbProperties
    {
        public static string DbTablePrefix { get; set; } = string.Empty;

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "AdministrationService";
    }
}
