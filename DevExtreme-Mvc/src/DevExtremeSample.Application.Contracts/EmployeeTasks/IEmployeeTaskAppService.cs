using System.Threading.Tasks;
using DevExtreme.AspNet.Data.ResponseModel;
using DevExtreme.AspNet.Mvc;
using Volo.Abp.Application.Services;

namespace DevExtremeSample.EmployeeTasks
{
    public interface IEmployeeTaskAppService : IApplicationService
    {
        Task<LoadResult> GetTasksAsync(DataSourceLoadOptions loadOptions);

        Task<LoadResult> GetTasksWithEmployeesAsync(DataSourceLoadOptions loadOptions);

        LoadResult GetTaskEmployees(DataSourceLoadOptions loadOptions);

        bool CreateTask(string values);

        bool UpdateTask(int key, string values);

        void DeleteTask(int key);
    }
}