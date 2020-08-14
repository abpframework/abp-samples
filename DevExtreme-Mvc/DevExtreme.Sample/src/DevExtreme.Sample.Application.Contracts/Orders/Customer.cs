using Newtonsoft.Json;

namespace DevExtreme.Sample.Orders
{
    public class Customer
    {
        [JsonProperty("Value")]
        public string Value { get; set; }
        
        [JsonProperty("Text")]
        public string Text { get; set; }
    }
}