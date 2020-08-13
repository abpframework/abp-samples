using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Data.ResponseModel;
using DevExtreme.AspNet.Mvc;
using DevExtreme.Sample.Controllers;
using DevExtreme.Sample.Data;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DevExtreme.Sample.EmployeeTasks
{
    [Area("employeeTask")]
    [ControllerName("EmployeeTask")]
    [Route("EmployeeTask")]
    [Microsoft.AspNetCore.Components.Route("api/employee-task/")]
    public class EmployeeTaskController : SampleController
    {
        private readonly SampleDataService _dataService;

        public EmployeeTaskController(SampleDataService dataService)
        {
            _dataService = dataService;
        }

        [HttpGet]
        public async Task<LoadResult> GetTasksAsync(DataSourceLoadOptions loadOptions)
        {
            var tasks = from d in _dataService.Tasks
                select new EmployeeTask {
                    Task_ID = d.Task_ID,
                    Task_Parent_ID = d.Task_Parent_ID,
                    Task_Owner_ID = d.Task_Owner_ID,
                    Task_Assigned_Employee_ID = d.Task_Assigned_Employee_ID,
                    Task_Completion = d.Task_Completion,
                    Task_Priority = d.Task_Priority,
                    Task_Status = d.Task_Status,
                    Task_Subject = d.Task_Subject,
                    Task_Start_Date = d.Task_Start_Date,
                    Task_Due_Date = d.Task_Due_Date,
                    Has_Items = _dataService.Tasks.Count(task => task.Task_Parent_ID == d.Task_ID) > 0
                };

            return DataSourceLoader.Load(tasks, loadOptions);
        }

        [HttpGet]
        [Route("get-tasks-with-employees")]
        public async Task<LoadResult> GetTasksWithEmployeesAsync(DataSourceLoadOptions loadOptions)
        {
            var tasks = from d in _dataService.Tasks
                select new EmployeeTask {
                    Task_ID = d.Task_ID,
                    Task_Parent_ID = d.Task_Parent_ID,
                    Task_Owner_ID = d.Task_Owner_ID,
                    Task_Assigned_Employee_ID = d.Task_Assigned_Employee_ID,
                    Task_Assigned_Employee = _dataService.Employees.FirstOrDefault(employee => employee.ID == d.Task_Assigned_Employee_ID),
                    Task_Completion = d.Task_Completion,
                    Task_Priority = d.Task_Priority,
                    Task_Status = d.Task_Status,
                    Task_Subject = d.Task_Subject,
                    Task_Start_Date = d.Task_Start_Date,
                    Task_Due_Date = d.Task_Due_Date
                };

            return DataSourceLoader.Load(tasks, loadOptions);
        }

        [HttpGet]
        [Route("get-task-employees")]
        public LoadResult GetTaskEmployees(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(_dataService.Employees, loadOptions);
        }
       
        [HttpPost]
        [Route("create-task")]
        public IActionResult CreateTask(string values)
        {
            var newItem = new EmployeeTask();
            JsonConvert.PopulateObject(values, newItem);

            if(!TryValidateModel(newItem))
                return BadRequest();

            _dataService.Tasks.Add(newItem);

            return Ok();
        }

        [HttpPut]
        [Route("update-task")]
        public IActionResult UpdateTask(int key, string values)
        {
            var item = _dataService.Tasks.First(e => e.Task_ID == key);

            JsonConvert.PopulateObject(values, item);

            if(!TryValidateModel(item))
                return BadRequest();

            return Ok();
        }
        
        [HttpDelete]
        [Route("delete-task")]
        public void DeleteTask(int key)
        {
            var item = _dataService.Tasks.First(e => e.Task_ID == key);
            _dataService.Tasks.Remove(item);
        }
    }
}