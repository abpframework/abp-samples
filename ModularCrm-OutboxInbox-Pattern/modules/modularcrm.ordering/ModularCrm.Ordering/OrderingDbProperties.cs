namespace ModularCrm.Ordering;

public static class OrderingDbProperties
{
    public static string DbTablePrefix { get; set; } = "Ordering";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Ordering";
}
