using System;
using Volo.Abp.Domain.Entities;

namespace ConcurrencyDemo
{
    public class Product : BasicAggregateRoot<Guid>, IHasConcurrencyStamp
    {
        public string Name { get; set; }
        
        public float Price { get; set; }
        
        public string ConcurrencyStamp { get; set; }
    }
}