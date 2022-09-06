using System.ComponentModel.DataAnnotations;

namespace EShopOnAbp.CatalogService.Products
{
    public class CreateProductDto
    {
        [Required]
        [StringLength(ProductConsts.MaxCodeLength)]
        public string Code { get; set; }

        [Required]
        [StringLength(ProductConsts.MaxNameLength)]
        public string Name { get; set; }

        [StringLength(ProductConsts.MaxImageNameLength)]
        public string ImageName { get; set; }

        public float Price { get; set; }

        public int StockCount { get; set; }
    }
}