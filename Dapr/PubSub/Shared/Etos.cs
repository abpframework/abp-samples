using System;
using Volo.Abp.EventBus;

namespace Shared;

[EventName("StockCountChanged")]
public class StockCountChangedEto
{
    public string Product { get; set; }

    public DateTime ChangedDate { get; set; }
}

[EventName("PriceChanged")]
public class PriceChangedEto
{
    public string Price { get; set; }

    public DateTime ChangedDate { get; set; }
}

public class CustomPubSubDataModel
{
    public int Id { get; set; }

    public string Name { get; set; }
}
