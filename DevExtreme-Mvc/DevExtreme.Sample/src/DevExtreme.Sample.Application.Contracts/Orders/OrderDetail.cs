using Newtonsoft.Json;

namespace DevExtreme.Sample.Orders
{
    public class OrderDetail
    {
        [JsonProperty("Product")]
        public string Product { get; set; }

        [JsonProperty("Price")]
        public decimal Price { get; set; }

        [JsonProperty("Quantity")]
        public int Quantity { get; set; }

        [JsonProperty("Sum")]
        public decimal Sum { get; set; }
    }
}