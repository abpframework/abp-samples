using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace EShopOnAbp.PaymentService.PaymentRequests;

public interface IPaymentRequestAppService : IApplicationService
{
    Task<PaymentRequestDto> CreateAsync(PaymentRequestCreationDto input);

    Task<PaymentRequestStartResultDto> StartAsync(string paymentMethod, PaymentRequestStartDto input);

    Task<PaymentRequestDto> CompleteAsync(string paymentMethod, PaymentRequestCompleteInputDto input);

    Task<bool> HandleWebhookAsync(string paymentMethod, string payload);
}
