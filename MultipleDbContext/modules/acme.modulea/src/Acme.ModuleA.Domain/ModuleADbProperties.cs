namespace Acme.ModuleA;

public static class ModuleADbProperties
{
    public static string DbTablePrefix { get; set; } = "ModuleA";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "ModuleA";
}
