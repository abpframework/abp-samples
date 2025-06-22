namespace ModularCrm.Catalog;

public static class CatalogDbProperties
{
    public static string DbTablePrefix { get; set; } = "Catalog";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Catalog";
}
