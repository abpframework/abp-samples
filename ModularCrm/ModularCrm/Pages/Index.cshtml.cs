using Microsoft.AspNetCore.Mvc;
using ModularCrm.Ordering.Services;
using ModularCrm.Payment.Services;
using ModularCrm.Products;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace ModularCrm.Pages;

public class IndexModel : AbpPageModel
{
    public List<OrderDto> Orders { get; set; }

    private readonly IOrderAppService _orderAppService;

    public List<ProductDto> Products { get; set; }

    private readonly IProductAppService _productAppService;

    public List<PaymentRecordDto> PaymentRecords { get; set; }

    private readonly IPaymentAppService _paymentAppService;

    [BindProperty]
    public string CustomerName { get; set; }

    [BindProperty]
    public Guid? ProductId { get; set; }

    public IndexModel(IOrderAppService orderAppService, IProductAppService productAppService, IPaymentAppService paymentAppService)
    {
        _orderAppService = orderAppService;
        _productAppService = productAppService;
        _paymentAppService = paymentAppService;
    }

    public async Task<IActionResult> OnGetAsync()
    {
        await InitializeAsync();

        return Page();
    }

    protected async Task InitializeAsync()
    {
        Orders = await _orderAppService.GetListAsync();
        Products = await _productAppService.GetListAsync();
        PaymentRecords = await _paymentAppService.GetListAsync();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        await InitializeAsync();

        if (CustomerName.IsNullOrWhiteSpace())
        {
            Alerts.Danger("Customer name is required!");
            return Page();
        }

        if (ProductId == null)
        {
            Alerts.Danger("Product is required!");
            return Page();
        }

        await _orderAppService.CreateAsync(new OrderCreationDto
        {
            CustomerName = CustomerName,
            ProductId = ProductId.Value
        });

        await InitializeAsync();

        return RedirectToPage();
    }
}
