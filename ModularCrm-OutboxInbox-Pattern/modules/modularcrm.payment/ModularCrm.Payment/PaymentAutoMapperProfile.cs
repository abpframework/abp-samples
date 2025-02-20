using AutoMapper;
using ModularCrm.Payment.Entities;
using ModularCrm.Payment.Services;

namespace ModularCrm.Payment;

public class PaymentAutoMapperProfile : Profile
{
    public PaymentAutoMapperProfile()
    {
        CreateMap<PaymentRecord, PaymentRecordDto>(MemberList.Destination);
    }
}
