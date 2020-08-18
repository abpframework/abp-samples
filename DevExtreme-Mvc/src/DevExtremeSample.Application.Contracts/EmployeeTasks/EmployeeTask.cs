using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DevExtremeSample.EmployeeTasks
{
    public class EmployeeTask {

        [JsonProperty("Task_ID")]
        public int Task_ID { set; get; }

        [JsonProperty("Task_Parent_ID")]
        public int Task_Parent_ID { set; get; }

        [Required]
        [Display(Name = "Assigned")]
        [JsonProperty("Task_Assigned_Employee_ID")]
        public int Task_Assigned_Employee_ID { set; get; }

        [JsonProperty("Task_Assigned_Employee")]
        public TaskEmployee Task_Assigned_Employee { set; get; }

        [JsonProperty("Task_Owner_ID")]
        public int Task_Owner_ID { set; get; }

        [Required]
        [Display(Name = "Task Subject")]
        [JsonProperty("Task_Subject")]
        public string Task_Subject { set; get; }

        [Display(Name = "Start Date")]
        [JsonProperty("Task_Start_Date")]
        public DateTime Task_Start_Date { set; get; }

        [Display(Name = "Due Date")]
        [JsonProperty("Task_Due_Date")]
        public DateTime Task_Due_Date { set; get; }

        [Display(Name = "Status")]
        [JsonProperty("Task_Status")]
        public string Task_Status { set; get; }

        [JsonProperty("Task_Priority")]
        public Priority Task_Priority { set; get; }

        [JsonProperty("Task_Completion")]
        public int Task_Completion { set; get; }

        [JsonProperty("Has_Items")]
        public bool Has_Items { get; set; }
    }
}