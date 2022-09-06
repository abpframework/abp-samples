using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.OrderingService;

public class TestProducts : ISingletonDependency
{
    private readonly List<Product> _products;
    private readonly Random _random = new();

    public TestProducts()
    {
        _products = new List<Product>();
        using (StreamReader r = new StreamReader("../../../../EShopOnAbp.OrderingService.TestBase/products.json"))
        {
            string json = r.ReadToEnd();
            _products = JsonConvert.DeserializeObject<List<Product>>(json);
        }
    }

    public List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
        string pictureUrl, int units)> GetRandomProducts(int quantity)
    {
        List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
            string pictureUrl, int units)> randomProducts =
            new List<(Guid productId, string productName, string productCode, decimal unitPrice, decimal discount,
                string pictureUrl, int units)>();
        for (int i = 0; i < quantity; i++)
        {
            int num = _random.Next(_products.Count);
            var product = _products[num];

            randomProducts.Add((Guid.NewGuid(), product.ProductName, $"Code-{num}", decimal.Parse(product.UnitPrice),
                0, product.PictureUrl, product.Units));
        }

        return randomProducts;
    }
}