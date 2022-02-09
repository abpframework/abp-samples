namespace BookStore;

public static class BookStoreDbProperties
{
    public static string DbTablePrefix { get; set; } = "BookStore";

    public static string DbSchema { get; set; } = null;

    public const string ConnectionStringName = "BookStore";
}
