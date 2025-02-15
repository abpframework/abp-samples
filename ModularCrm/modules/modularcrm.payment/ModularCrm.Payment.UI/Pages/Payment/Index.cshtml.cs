using System.Collections.Generic;
using System.Threading.Tasks;
using ModularCrm.Payment.Services;

namespace ModularCrm.Payment.UI.Pages.Payment;

public class IndexModel : PaymentPageModel
{
    public List<PaymentRecordDto> PaymentRecords { get; set; }

    private readonly IPaymentAppService _paymentAppService;

    public IndexModel(IPaymentAppService paymentAppService)
    {
        _paymentAppService = paymentAppService;
    }

    public async Task OnGetAsync()
    {
        PaymentRecords = await _paymentAppService.GetListAsync();
    }
}
