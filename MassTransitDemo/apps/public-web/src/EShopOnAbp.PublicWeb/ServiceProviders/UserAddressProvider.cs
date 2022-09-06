using System.Collections.Generic;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.PublicWeb.ServiceProviders;

public class UserAddressProvider : ITransientDependency
{
    public List<AddressDto> GetDemoAddresses()
    {
        return new List<AddressDto>()
        {
            new()
            {
                Id = 1,
                Type = EShopOnAbpPaymentConsts.DemoAddressTypes.Home,
                Street = "Cecilia Chapman Senior 711-2880 Nulla St.",
                City = "Mankato Mississippi",
                Country = "USA",
                ZipCode = "96522",
                IsDefault = true
            },
            new()
            {
                Id = 2,
                Type = EShopOnAbpPaymentConsts.DemoAddressTypes.Work,
                Street = "Yeşilköy Serbest Bölge Mah. E-Blok Sk. Bakırköy",
                City = "İstanbul",
                Country = "Turkey",
                ZipCode = "34149"
            }
        };
    }
}

public class AddressDto
{
    public int Id { get; set; }
    public string Type { get; set; }
    public bool IsDefault { get; set; } = false;
    public string Street { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string ZipCode { get; set; }

    public override string ToString()
    {
        return $"{Street} {ZipCode} {City}/{Country}";
    }
}