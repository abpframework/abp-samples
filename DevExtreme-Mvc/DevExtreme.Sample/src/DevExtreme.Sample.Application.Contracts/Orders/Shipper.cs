using Newtonsoft.Json;

namespace DevExtreme.Sample.Orders
{
    public class Shipper
    {
        [JsonProperty("Value")]
        public int Value { get; set; }
        
        [JsonProperty("Text")]
        public string Text { get; set; }
    }
}