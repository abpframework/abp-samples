using Newtonsoft.Json;

namespace DevExtremeSample.Orders
{
    public class OrderDetail
    {
        [JsonProperty("Product")]
        public string Product { get; set; }

        [JsonProperty("Price")]
        public float Price { get; set; }

        [JsonProperty("Quantity")]
        public int Quantity { get; set; }

        [JsonProperty("Sum")]
        public float Sum { get; set; }
    }
}