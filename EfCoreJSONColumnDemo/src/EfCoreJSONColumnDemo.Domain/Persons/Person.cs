using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities;

namespace EfCoreJSONColumnDemo.Persons;

public class Person : AggregateRoot<int>
{
    [Required]
    public string Name { get; set; }
    [Required]
    public ContactDetails ContactDetails { get; set; }
}