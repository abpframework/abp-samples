using Riok.Mapperly.Abstractions;
using Volo.Abp.Mapperly;

namespace ModularCrm.Catalog;

[Mapper]
public partial class ProductToProductDtoMapper : MapperBase<Product, ProductDto>
{
    public override partial ProductDto Map(Product source);

    public override partial void Map(Product source, ProductDto destination);
}