using Riok.Mapperly.Abstractions;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Mapperly;

namespace ModularCrm.Ordering;

[Mapper]
public partial class OrderToOrderDtoMapper : MapperBase<Order, OrderDto>
{
    [MapperIgnoreTarget(nameof(OrderDto.ProductName))]
    public override partial OrderDto Map(Order source);
    public override partial void Map(Order source, OrderDto destination);
}
