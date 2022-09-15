using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Threading.Tasks;

namespace ProductManagement;

[ServiceContract(Name = "ProductManagement.ProductService")]
public interface IMyProductService
{
    [OperationContract]
    Task<List<ProductDto>> GetListAsync();
}

[DataContract]
public class ProductDto
{
    [DataMember(Order = 1)]
    public Guid Id { get; set; }
    
    [DataMember(Order = 2)]
    public string Name { get; set; }
}