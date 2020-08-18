using Newtonsoft.Json;

namespace DevExtremeSample.Orders
{
    public class Shipper
    {
        [JsonProperty("Value")]
        public int Value { get; set; }
        
        [JsonProperty("Text")]
        public string Text { get; set; }
    }
}