using System;
using Volo.Abp.EventBus;

namespace Shared;

[EventName("StockCountChanged")]
public class StockCountChangedEto
{
    public string Product { get; set; }

    public DateTime ChangedDate { get; set; }
}
