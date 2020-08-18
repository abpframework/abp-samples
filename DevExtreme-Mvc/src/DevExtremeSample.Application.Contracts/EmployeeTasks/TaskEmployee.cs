using Newtonsoft.Json;

namespace DevExtremeSample.EmployeeTasks
{
    public class TaskEmployee {

        [JsonProperty("ID")]
        public int ID { set; get; }

        [JsonProperty("Name")]
        public string Name { set; get; }

        [JsonProperty("Picture")]
        public string Picture { set; get; }
    }
}