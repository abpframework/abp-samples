using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace ConcurrencyDemo
{
    public class ProductDto : EntityDto<Guid>, IHasConcurrencyStamp
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public string ConcurrencyStamp { get; set; }
    }
}