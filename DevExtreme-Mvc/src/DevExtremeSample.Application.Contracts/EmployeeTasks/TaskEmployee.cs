using Newtonsoft.Json;

namespace DevExtremeSample.EmployeeTasks
{
    public class TaskEmployee {

        [JsonProperty("id")]
        public int ID { set; get; }

        [JsonProperty("name")]
        public string Name { set; get; }

        [JsonProperty("picture")]
        public string Picture { set; get; }
    }
}