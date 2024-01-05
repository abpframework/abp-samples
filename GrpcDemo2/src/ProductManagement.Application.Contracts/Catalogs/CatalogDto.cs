using System;
using System.Runtime.Serialization;

namespace ProductManagement.Catalogs;

[DataContract]
public class CatalogDto
{
    [DataMember(Order = 1)]
    public Guid Id { get; set; }
    
    [DataMember(Order = 2)]
    public string Name { get; set; }
}