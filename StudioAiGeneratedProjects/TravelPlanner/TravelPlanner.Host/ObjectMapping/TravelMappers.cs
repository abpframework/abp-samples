using Riok.Mapperly.Abstractions;
using TravelPlanner.Entities;
using TravelPlanner.Services.Travels;
using Volo.Abp.Mapperly;

namespace TravelPlanner.ObjectMapping;

[Mapper]
public partial class TravelToTravelDtoMapper : MapperBase<Travel, TravelDto>
{
    public override partial TravelDto Map(Travel source);
    public override partial void Map(Travel source, TravelDto destination);
}

[Mapper]
public partial class TransportationToTransportationDtoMapper : MapperBase<Transportation, TransportationDto>
{
    public override partial TransportationDto Map(Transportation source);
    public override partial void Map(Transportation source, TransportationDto destination);
}
