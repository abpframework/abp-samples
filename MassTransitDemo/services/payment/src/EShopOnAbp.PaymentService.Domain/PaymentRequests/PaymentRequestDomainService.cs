using System;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace EShopOnAbp.PaymentService.PaymentRequests;

public class PaymentRequestDomainService : DomainService
{
    private readonly IPaymentRequestRepository _paymentRequestRepository;

    public PaymentRequestDomainService(IPaymentRequestRepository paymentRequestRepository)
    {
        _paymentRequestRepository = paymentRequestRepository;
    }

    public async Task<PaymentRequest> UpdatePaymentRequestStateAsync(
        Guid paymentRequestId,
        string orderStatus,
        string orderId)
    {
        var paymentRequest = await _paymentRequestRepository.GetAsync(paymentRequestId);

        if (orderStatus == PayPalConsts.OrderStatus.Completed || orderStatus == PayPalConsts.OrderStatus.Approved)
        {
            paymentRequest.SetAsCompleted();
        }
        else
        {
            paymentRequest.SetAsFailed(orderStatus);
        }

        paymentRequest.ExtraProperties[PayPalConsts.OrderIdPropertyName] = orderId;
        paymentRequest.ExtraProperties[nameof(orderStatus)] = orderStatus;

        await _paymentRequestRepository.UpdateAsync(paymentRequest);

        return paymentRequest;
    }
}