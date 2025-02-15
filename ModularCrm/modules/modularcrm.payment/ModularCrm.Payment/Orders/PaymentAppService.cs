using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Payment.Entities;
using ModularCrm.Payment.Services;
using Volo.Abp.Domain.Repositories;

namespace ModularCrm.Payment.Orders;

public class PaymentAppService : PaymentAppServiceBase, IPaymentAppService
{
    private readonly IRepository<PaymentRecord, Guid>  _paymentRecordRepository;

    public PaymentAppService(IRepository<PaymentRecord, Guid> paymentRecordRepository)
    {
        _paymentRecordRepository = paymentRecordRepository;
    }

    public async Task<List<PaymentRecordDto>> GetListAsync()
    {
        var payments = await _paymentRecordRepository.GetListAsync();

        var paymentsDtos = ObjectMapper.Map<List<PaymentRecord>, List<PaymentRecordDto>>(payments);

        return paymentsDtos;
    }
}
