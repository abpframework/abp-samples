using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DevExtremeSample.EmployeeTasks
{
    public class EmployeeTask {

        [JsonProperty("task_ID")]
        public int Task_ID { set; get; }

        [JsonProperty("task_Parent_ID")]
        public int Task_Parent_ID { set; get; }

        [Required]
        [Display(Name = "Assigned")]
        [JsonProperty("task_Assigned_Employee_ID")]
        public int task_Assigned_Employee_ID { set; get; }

        [JsonProperty("task_Assigned_Employee")]
        public TaskEmployee Task_Assigned_Employee { set; get; }

        [JsonProperty("task_Owner_ID")]
        public int Task_Owner_ID { set; get; }

        [Required]
        [Display(Name = "task Subject")]
        [JsonProperty("Task_Subject")]
        public string task_Subject { set; get; }

        [Display(Name = "Start Date")]
        [JsonProperty("task_Start_Date")]
        public DateTime task_Start_Date { set; get; }

        [Display(Name = "Due Date")]
        [JsonProperty("task_Due_Date")]
        public DateTime task_Due_Date { set; get; }

        [Display(Name = "Status")]
        [JsonProperty("task_Status")]
        public string task_Status { set; get; }

        [JsonProperty("task_Priority")]
        public Priority task_Priority { set; get; }

        [JsonProperty("task_Completion")]
        public int task_Completion { set; get; }

        [JsonProperty("has_Items")]
        public bool Has_Items { get; set; }
    }
}