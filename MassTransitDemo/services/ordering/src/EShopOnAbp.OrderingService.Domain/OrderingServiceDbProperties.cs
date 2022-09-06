namespace EShopOnAbp.OrderingService
{
    public static class OrderingServiceDbProperties
    {
        public static string DbTablePrefix { get; set; } = "";

        public static string DbSchema { get; set; }

        public const string ConnectionStringName = "OrderingService";
    }
}
