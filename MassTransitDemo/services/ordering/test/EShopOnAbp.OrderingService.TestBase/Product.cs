using System;
using System.Text.Json.Serialization;

namespace EShopOnAbp.OrderingService;

public class Product
{
    [JsonPropertyName("id")] public int Id { get; set; }

    public Guid ProductId
    {
        get
        {
            byte[] bytes = new byte[16];
            BitConverter.GetBytes(Id).CopyTo(bytes, 0);
            return new Guid(bytes);
        }
    }

    [JsonPropertyName("productName")] public string ProductName { get; set; }

    [JsonPropertyName("pictureUrl")] public string PictureUrl { get; set; }

    [JsonPropertyName("productStock")] public int ProductStock { get; set; }

    [JsonPropertyName("unitPrice")] public string UnitPrice { get; set; }

    [JsonPropertyName("productSalePrice")] public string ProductSalePrice { get; set; }

    [JsonPropertyName("units")] public int Units { get; set; }
}