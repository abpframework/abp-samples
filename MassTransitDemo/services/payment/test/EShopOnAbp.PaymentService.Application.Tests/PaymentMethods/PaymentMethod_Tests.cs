using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace EShopOnAbp.PaymentService.PaymentMethods;

public class PaymentMethod_Tests : PaymentServiceApplicationTestBase
{
    [Fact]
    public void EnsureAllPaymentMethodsAreRegistered()
    {
        var existingPaymentMethodTypes = GetExistingPaymentMethotTypes();

        var paymentMethods = GetRequiredService<IEnumerable<IPaymentMethod>>();

        paymentMethods.Count().ShouldBe(existingPaymentMethodTypes.Length);
    }

    [Fact]
    public void EnsurePaymentTypeIsUnique()
    {
        var paymentMethods = GetRequiredService<IEnumerable<IPaymentMethod>>().ToList();

        var distinctedPaymentMethods = paymentMethods.DistinctBy(p => p.Name).ToList();

        paymentMethods.Count.ShouldBe(distinctedPaymentMethods.Count);
    }

    [Fact]
    public void EnsureAllPaymentMethodsHavePaymentTypeImplementation()
    {
        foreach (var paymentMethod in GetRequiredService<IEnumerable<IPaymentMethod>>())
        {
            paymentMethod.Name.ShouldNotBeNullOrEmpty();
        }
    }

    private static Type[] GetExistingPaymentMethotTypes()
    {
        return typeof(IPaymentMethod)
            .Assembly
            .GetTypes()
            .Where(t => typeof(IPaymentMethod).IsAssignableFrom(t) && !t.IsAbstract)
            .ToArray();
    }
}
