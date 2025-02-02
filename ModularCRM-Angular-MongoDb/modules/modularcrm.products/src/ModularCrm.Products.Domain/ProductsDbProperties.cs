﻿namespace ModularCrm.Products;

public static class ProductsDbProperties
{
    public static string DbTablePrefix { get; set; } = "Products";

    public static string? DbSchema { get; set; } = null;

    public const string ConnectionStringName = "Products";
}
