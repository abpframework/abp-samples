using System.Threading.Tasks;
using DevExtreme.AspNet.Data.ResponseModel;
using DevExtreme.AspNet.Mvc;
using Volo.Abp.Application.Services;

namespace DevExtremeSample.Orders
{
    public interface IOrderAppService : IApplicationService
    {
        Task<LoadResult> GetOrdersAsync(DataSourceLoadOptions loadOptions);

        Task<Order> InsertOrder(string values);

        Task<Order> UpdateOrder(int key, string values);

        Task DeleteOrder(int key);
        
        object GetSampleOrderDetails(int orderID, DataSourceLoadOptions loadOptions);

        Task<LoadResult> GetShippersAsync(DataSourceLoadOptions loadOptions);

        Task<LoadResult> GetCustomersAsync(DataSourceLoadOptions loadOptions);
    }
}