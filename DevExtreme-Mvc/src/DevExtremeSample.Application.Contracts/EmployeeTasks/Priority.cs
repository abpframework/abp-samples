using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace DevExtremeSample.EmployeeTasks
{
    [JsonConverter(typeof(StringEnumConverter))]
    public enum Priority
    {
        Low,
        Normal,
        High,
        Urgent
    }
}