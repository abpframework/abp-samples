namespace EShopOnAbp.BasketService.Entities;

public class BasketItem
{
    public Guid ProductId { get; private set; }
    public int Count { get; internal set; }

    private BasketItem()
    {
        
    }

    public BasketItem(Guid productId, int count = 1)
    {
        ProductId = productId;
        Count = count;
    }
}