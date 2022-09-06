namespace EShopOnAbp.PaymentService
{
    public static class PaymentServiceDbProperties
    {
        public static string DbTablePrefix { get; set; } = "PaymentService";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "PaymentService";
    }
}
