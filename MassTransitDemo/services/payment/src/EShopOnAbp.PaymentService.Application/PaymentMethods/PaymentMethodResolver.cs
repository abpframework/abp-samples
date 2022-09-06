using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Logging;
using Volo.Abp.DependencyInjection;

namespace EShopOnAbp.PaymentService.PaymentMethods;

public class PaymentMethodResolver : ITransientDependency
{
    private readonly IEnumerable<IPaymentMethod> _paymentMethods;
    private readonly ILogger<PaymentMethodResolver> _logger;

    public PaymentMethodResolver(IEnumerable<IPaymentMethod> paymentMethods, ILogger<PaymentMethodResolver> logger)
    {
        _paymentMethods = paymentMethods;
        _logger = logger;
    }

    public IPaymentMethod Resolve(string paymentMethodName)
    {
        var paymentMethod = _paymentMethods.FirstOrDefault(q => q.Name.Equals(paymentMethodName, StringComparison.InvariantCultureIgnoreCase));
        if (paymentMethod == null)
        {
            _logger.LogError($"Couldn't find Payment method with type:{paymentMethodName}");
            throw new ArgumentException("Payment method not found", paymentMethodName);
        }

        return paymentMethod;
    }
}