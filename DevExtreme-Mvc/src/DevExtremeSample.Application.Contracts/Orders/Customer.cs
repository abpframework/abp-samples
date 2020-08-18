using Newtonsoft.Json;

namespace DevExtremeSample.Orders
{
    public class Customer
    {
        [JsonProperty("Value")]
        public string Value { get; set; }
        
        [JsonProperty("Text")]
        public string Text { get; set; }
    }
}