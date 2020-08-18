using System.Linq;
using System.Threading.Tasks;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Data.ResponseModel;
using DevExtreme.AspNet.Mvc;
using DevExtremeSample.Data;
using Newtonsoft.Json;

namespace DevExtremeSample.Orders
{
    public class OrderAppService : DevExtremeSampleAppService, IOrderAppService
    {
        private readonly SampleDataService _data;

        public OrderAppService(SampleDataService data)
        {
            _data = data;
        }

        public async Task<LoadResult> GetOrdersAsync(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(_data.Orders, loadOptions);
        }

        public async Task<Order> InsertOrder(string values)
        {
            var newOrder = new Order();
            JsonConvert.PopulateObject(values, newOrder);

            // custom validation if you need
            var validation = true;
            
            if(!validation)
                return null;

            _data.Orders.Add(newOrder);

            return newOrder;
        }

        public async Task<Order> UpdateOrder(int key, string values)
        {
            var order = _data.Orders.First(o => o.OrderID == key);
            
            // custom validation if you need
            var validation = true;
            
            if(!validation)
                return null;

            
            JsonConvert.PopulateObject(values, order);

            return order;
        }

        public async Task DeleteOrder(int key)
        {
            var order = _data.Orders.First(o => o.OrderID == key);
            _data.Orders.Remove(order);
        }

        public object GetSampleOrderDetails(int orderID, DataSourceLoadOptions loadOptions)
        {
            // Test Data
            
            var myObject = new
            {
                data = new object[] {
                    new
                    {
                        Product = "Sir Rodney's Marmalade",
                        Price = 65,
                        Quantity = 40,
                        Sum = 2592
                    },
                    new
                    {
                        Product = "Geitost",
                        Price = 2,
                        Quantity = 25,
                        Sum = 50
                    },
                    new
                    {
                        Product = "Camembert Pierrot",
                        Price = 21,
                        Quantity = 40,
                        Sum = 1088
                    }
                }
            };

            return myObject;
        }

        public async Task<LoadResult> GetShippersAsync(DataSourceLoadOptions loadOptions)
        {
            var lookup = from i in _data.Shippers
                orderby i.Text
                select new {
                    Value = i.Value,
                    Text = i.Text
                };

            return DataSourceLoader.Load(lookup, loadOptions);
        }

        public async Task<LoadResult> GetCustomersAsync(DataSourceLoadOptions loadOptions)
        {
            var lookup = from i in _data.Customers
                let text = i.Text + " (" + i.Text + ")"
                orderby i.Text
                select new {
                    Value = i.Value,
                    Text = text
                };

            return DataSourceLoader.Load(lookup, loadOptions);
        }
    }
}