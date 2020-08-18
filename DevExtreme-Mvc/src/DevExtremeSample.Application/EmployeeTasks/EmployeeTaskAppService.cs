using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Data.ResponseModel;
using DevExtreme.AspNet.Mvc;
using DevExtremeSample.Data;
using Newtonsoft.Json;

namespace DevExtremeSample.EmployeeTasks
{
    public class EmployeeTaskAppService : DevExtremeSampleAppService, IEmployeeTaskAppService
    {
        private readonly SampleDataService _dataService;

        public EmployeeTaskAppService(SampleDataService dataService)
        {
            _dataService = dataService;
        }

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

        public LoadResult GetTaskEmployees(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(_dataService.Employees, loadOptions);
        }

        public bool CreateTask(string values)
        {
            var newItem = new EmployeeTask();
            JsonConvert.PopulateObject(values, newItem);

            // Custom validation
            var validation = true;

            if (!validation)
                return false;

            _dataService.Tasks.Add(newItem);

            return true;
        }

        public bool UpdateTask(int key, string values)
        {
            var item = _dataService.Tasks.First(e => e.Task_ID == key);

            // Custom validation
            var validation = true;

            if (!validation)
                return false;
            
            JsonConvert.PopulateObject(values, item);

            return true;
        }

        public void DeleteTask(int key)
        {
            var item = _dataService.Tasks.First(e => e.Task_ID == key);
            _dataService.Tasks.Remove(item);
        }
    }
}