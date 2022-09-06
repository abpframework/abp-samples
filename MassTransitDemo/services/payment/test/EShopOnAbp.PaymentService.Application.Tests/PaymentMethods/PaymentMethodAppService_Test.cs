using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace EShopOnAbp.PaymentService.PaymentMethods;
public class PaymentMethodAppService_Test : PaymentServiceApplicationTestBase
{
    IPaymentMethodAppService _paymentMethodAppService;

    public PaymentMethodAppService_Test()
    {
        _paymentMethodAppService = GetRequiredService<IPaymentMethodAppService>();
    }

    [Fact]
    public async Task ShouldReturnAllPaymentMethods()
    {
        var paymentMethods = await _paymentMethodAppService.GetListAsync();

        paymentMethods.ShouldNotBeEmpty();

        paymentMethods.ShouldContain(x => x.Name == PaymentMethodNames.PayPal);
        paymentMethods.ShouldContain(x => x.Name == PaymentMethodNames.Demo);
    }
}
