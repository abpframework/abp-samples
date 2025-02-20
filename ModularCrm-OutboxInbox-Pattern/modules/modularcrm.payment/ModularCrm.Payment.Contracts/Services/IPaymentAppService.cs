using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace ModularCrm.Payment.Services;

public interface IPaymentAppService : IApplicationService
{
    Task<List<PaymentRecordDto>> GetListAsync();
}
