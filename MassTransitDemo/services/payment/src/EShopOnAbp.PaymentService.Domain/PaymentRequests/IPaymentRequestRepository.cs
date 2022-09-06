using System;
using Volo.Abp.Domain.Repositories;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    public interface IPaymentRequestRepository : IBasicRepository<PaymentRequest, Guid>
    {
    }
}
