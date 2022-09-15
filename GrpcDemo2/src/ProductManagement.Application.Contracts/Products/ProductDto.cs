using System;
using System.Runtime.Serialization;

namespace ProductManagement.Products;

[DataContract]
public class ProductDto
{
    [DataMember(Order = 1)]
    public Guid Id { get; set; }
    
    [DataMember(Order = 2)]
    public string Name { get; set; }
}