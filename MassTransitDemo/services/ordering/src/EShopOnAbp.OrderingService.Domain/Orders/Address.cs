using System.Collections.Generic;
using Volo.Abp;
using Volo.Abp.Domain.Values;

namespace EShopOnAbp.OrderingService.Orders;

public class Address : ValueObject
{
    public string Description { get; private set; }
    public string Street { get; private set; }
    public string City { get; private set; }
    public string Country { get; private set; }
    public string ZipCode { get; private set; }

    private Address()
    {
    }

    public Address(string street, string city, string country, string zipcode, string description)
    {
        Street = Check.NotNullOrEmpty(street, nameof(street));
        City = Check.NotNullOrEmpty(city, nameof(city));
        Country = Check.NotNullOrEmpty(country, nameof(country));
        ZipCode = Check.NotNullOrEmpty(zipcode, nameof(zipcode));
        Description = description;
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
        yield return Street;
        yield return City;
        yield return Country;
        yield return ZipCode;
        yield return Description;
    }
}