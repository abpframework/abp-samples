namespace EShopOnAbp.OrderingService;

public static class OrderingServiceErrorCodes
{
    public const string OrderingStatusNotFound = "Ordering:00001";
    public const string InvalidUnits = "Ordering:00002";
    public const string InvalidDiscount = "Ordering:00003";
    public const string InvalidTotalForDiscount = "Ordering:00004";
    public const string OrderIdIdNotGuid = "Ordering:01000";
    public const string OrderWithIdNotFound = "Ordering:01001";
}