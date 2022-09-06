using System;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.OrderingService;

public class TestData : ISingletonDependency
{
    public string CurrentUserEmail { get; set; } = "galip.erdem@volosoft.com";
    public Guid CurrentUserId { get; set; } = Guid.NewGuid();
    public string CurrentUserName { get; set; } = "Galip T. ERDEM";
    public Guid TestUserId { get; set; } = Guid.NewGuid();
    public string TestUserEmail { get; set; } = "test@user.com";
    public string TestUserName { get; set; } = "Test User";
    public DemoAddress Address { get; set; } = new DemoAddress();

    public class DemoAddress
    {
        public string Street { get; set; } = "Test Demo Street";
        public string City { get; set; } = "DemoCity";
        public string Country { get; set; } = "DemoLand";
        public string ZipCode { get; set; } = "123-456-789";
    }
}