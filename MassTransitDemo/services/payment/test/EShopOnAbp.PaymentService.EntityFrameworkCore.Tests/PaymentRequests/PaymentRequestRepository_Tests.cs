using EShopOnAbp.PaymentService.EntityFrameworkCore;
using Shouldly;
using System;
using System.Threading.Tasks;
using Xunit;

namespace EShopOnAbp.PaymentService.PaymentRequests
{
    public class PaymentRequestRepository_Tests : PaymentServiceEntityFrameworkCoreTestBase
    {
        private readonly IPaymentRequestRepository _paymentRequestRepository;
        public PaymentRequestRepository_Tests()
        {
            _paymentRequestRepository = GetRequiredService<IPaymentRequestRepository>();
        }

        [Fact]
        public async Task Should_Insert_Payment_Request()
        {
            var id = Guid.NewGuid();
            var paymentRequest = new PaymentRequest(id, Guid.NewGuid().ToString(), 456, "USD");

            await _paymentRequestRepository.InsertAsync(paymentRequest, autoSave: true);

            var inserted = await _paymentRequestRepository.GetAsync(id);

            inserted.Id.ShouldNotBe(Guid.Empty);
        }
    }
}
