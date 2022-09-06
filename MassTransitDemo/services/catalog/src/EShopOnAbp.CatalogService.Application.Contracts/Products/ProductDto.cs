using System;
using Volo.Abp.Application.Dtos;

namespace EShopOnAbp.CatalogService.Products
{
    public class ProductDto : AuditedEntityDto<Guid>
    {
        public string Code { get; set; }

        public string Name { get; set; }

        public string ImageName { get; set; }

        public float Price { get; set; }

        public int StockCount { get; set; }
    }
}